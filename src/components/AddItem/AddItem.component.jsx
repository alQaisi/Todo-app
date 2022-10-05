import { AddButton, Box, Container } from "./AddItem.styles";
import { useState } from "react";

function AddItem({addItem}){
    const [text,setText]=useState("");
    
    function inputHandler({target}){
        setText(target.value);
    }

    function AddItemHandler(){
        if(text){
            addItem(text);
            setText("");
        }
    }

    return(
        <Container>
            <Box type="text" value={text} aria-label="item details" placeholder="add details" onChange={inputHandler}/>
            <AddButton onClick={AddItemHandler}>Add</AddButton>
        </Container>
    );
}
export default AddItem;