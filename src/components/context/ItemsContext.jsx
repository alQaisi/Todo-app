import { useState, useEffect, createContext } from "react";
import { v4 as uuid } from 'uuid';
import { useContext } from "react";
import { UiContext } from "./uiContext.context";

export const ItemsContext=createContext({});

export function ItemsProvider({children}){
    
    const [items,setItems]=useState([]);
    const [filterdItems,setFilterdItems]=useState([]);

    function addItem(itemToAdd){
        const id = uuid();
        const newItem={id,text:itemToAdd,status:"active"};
        const newItems=[...items,newItem];
        setItems(newItems);
    }

    function deleteItem(itemToDelete){
        const newItems=items.filter(item=>item.id!==itemToDelete);
        setItems(newItems);
    }

    function deleteCompletedItems(){
        const newItems=items.filter(item=>item.status!=="completed");
        if(!newItems.length)
            localStorage.setItem('TodoItems',JSON.stringify(items));
        setItems(newItems);
        
    }

    function toggleItemComplete(itemToComplete){
        const newItems=items.map(item=>{
            if(item.id===itemToComplete)
                item.status=(item.status==="active"?"completed":"active");
            return item;
        });
        setItems(newItems);
    }

    const { currentPage } =useContext(UiContext);

    useEffect(()=>{
        items.length && localStorage.setItem('TodoItems',JSON.stringify(items));
        const NewfilterdItems=items.filter(item=>{
            if(currentPage==="all")
                return true;
            return item.status===currentPage;
        });
        setFilterdItems(NewfilterdItems);
    },[currentPage,items]);

    useEffect(()=>{
        const storedItems=JSON.parse(localStorage.getItem("TodoItems"))
        storedItems && setItems(storedItems)
    },[]);
    
    const value={ filterdItems, addItem, deleteItem, toggleItemComplete, deleteCompletedItems };
    return(
        <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
    );
}