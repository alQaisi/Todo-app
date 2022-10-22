import { Cont, DeleteBtn, BtnIcon } from "./Container.styles";
import { Header, Footer, Navbar, Item, AddItem } from "../";
import { Outlet } from 'react-router-dom';
import { Children } from "react";
import { setItems } from "../../store/itemsSlice";
import { selectCurrentPage,selectItems,selectTodoItems } from "../../store/selectors";
import { useDispatch,useSelector } from "react-redux";

function Container(){
    const dispatch=useDispatch();
    const currentPage= useSelector(selectCurrentPage);
    const filterdItems=useSelector(selectTodoItems);
    const allItems=[...useSelector(selectItems)];

    const items=Children.toArray(filterdItems.map(item=><Item item={item} toggle={toggleItemComplete} deleteCallBack={ currentPage==="completed" && deleteItem }/>))

    function deleteItem(itemToDelete){
        const newItems=allItems.filter(item=>item.id!==itemToDelete);
        dispatch(setItems(newItems));
    }

    function deleteCompletedItems(){
        const newItems=allItems.filter(item=>item.status!=="completed");
        dispatch(setItems(newItems));
    }

    function toggleItemComplete(itemToComplete){
        const newItems=allItems.map(item=>{
            if(item.id===itemToComplete)
                return {...item,status:item.status==="active"?"completed":"active"}
            return item;
        })
        dispatch(setItems(newItems));
    }

    return(
        <Cont>
            <Header>#todo</Header>
            <Navbar/>
            { currentPage!=="completed" && <AddItem/> }
            { items }
            <Outlet/>
            { currentPage==="completed" && <DeleteBtn onClick={deleteCompletedItems}> <BtnIcon/> delete all </DeleteBtn> }
            <Footer/>
        </Cont>
    );
}
export default Container;