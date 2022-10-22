import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { 
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, 
} from "redux-persist";
import logger from "redux-logger"
import uiReducer from "./uiSlice";
import itemsReducer from "./itemsSlice";

const middlewares = [process.env.NODE_ENV!=="production" && logger].filter(Boolean);;

const rootReducer=combineReducers({
    ui:uiReducer,
    items:itemsReducer,
});

const persistConfig={
    key:"root",
    storage,
    blacklist:["ui"]
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },}).concat(...middlewares),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor=persistStore(store);
