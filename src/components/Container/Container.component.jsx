import { Cont, DeleteBtn, BtnIcon } from "./Container.styles";
import { Header, Footer, Navbar, Item, AddItem } from "../";
import { Outlet } from 'react-router-dom';
import { UiContext } from "../context/uiContext.context";
import { ItemsContext } from "../context/ItemsContext";
import { Children, useContext } from "react";


function Container(){
    const { currentPage } = useContext(UiContext);
    const { filterdItems, addItem, deleteItem, toggleItemComplete, deleteCompletedItems } = useContext(ItemsContext);
    const items=Children.toArray(filterdItems.map(item=><Item item={item} toggle={toggleItemComplete} deleteCallBack={ currentPage==="completed" && deleteItem }/>))
    return(
        <Cont>
            <Header>#todo</Header>
            <Navbar/>
            { currentPage!=="completed" && <AddItem addItem={ addItem }/> }
            { items }
            <Outlet/>
            { currentPage==="completed" && <DeleteBtn onClick={deleteCompletedItems}> <BtnIcon/> delete all </DeleteBtn> }
            <Footer/>
        </Cont>
    );
}
export default Container;