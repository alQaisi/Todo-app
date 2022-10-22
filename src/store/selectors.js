import { createSelector } from "@reduxjs/toolkit";

export function selectCurrentPage(state){
    return state.ui.currentPage;
}

export function selectItems(state){
    return state.items.items;
}

export const selectTodoItems=createSelector([selectCurrentPage,selectItems],(currentPage,items)=>{
    switch(currentPage){
        case "active":
            return items.filter(item=>item.status==="active");
        case "completed":
            return items.filter(item=>item.status==="completed");
        case "all":
        default:
            return items;
    }
});