import { Checkbox, Label, ItemCont, DeleteIcon } from "./Item.styles";

function Item({ item, toggle, deleteCallBack }){
    return(
        <ItemCont>
            <Label>
                <Checkbox type="checkbox" checked={item.status!=="active"} onChange={()=>toggle(item.id)}/>
                <span/>
                <p>{ item.text }</p>
            </Label>
            { deleteCallBack && <DeleteIcon onClick={()=>deleteCallBack(item.id)}/> }
        </ItemCont>
    );
}
export default Item;