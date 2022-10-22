import { AddButton, Box, Container } from "./AddItem.styles";
import { addItem } from "../../store/itemsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

function AddItem(){
    const dispatch=useDispatch();
    const [text,setText]=useState("");
    
    function inputHandler({target}){
        setText(target.value);
    }

    function AddItemHandler(){
        if(text){
            setText("");
            const id = uuid();
            const newItem={id,text:text,status:"active"};
            dispatch(addItem(newItem));
        }
    }
    
    return(
        <Container>
            <Box type="text" value={text} aria-label="item details" placeholder="add details" onChange={inputHandler} onKeyUp={({key})=>key==="Enter" && AddItemHandler()}/>
            <AddButton onClick={AddItemHandler}>Add</AddButton>
        </Container>
    );
}
export default AddItem;