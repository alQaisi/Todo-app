import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

export const Checkbox=styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0px;
    width: 0px;
`;

export const Label=styled.label` 
    input:checked~p{
        text-decoration: line-through;
    }
    p{
        
        font-size: 1.5rem;
        font-weight: 500;
        color: #000;
    }
    span{
        border: 1px solid #828282;
        border-radius: 4px;
        position: absolute;
        top: 1px;
        left: 0px;
        height: 24px;
        width: 24px;
        background-color: white;
        &::after{
            content: "";
            position: absolute;
            display: none;
            left: 7px;
            top: 2px;
            width: 6px;
            height: 13px;
            border: solid white;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        :hover{
            background-color: #eeeeee;
        }
    }
    input:checked~span{
        background: #2F80ED;
        border-color: transparent;
        ::after{
            display: block;
        }
    }
    cursor: pointer;
    position: relative;
    display: block;
    width: fit-content;
    max-width:90%;
    padding: 0px 0 2px 35px;
`;

export const DeleteIcon=styled(MdDeleteOutline)`
    color: #BDBDBD;
    cursor: pointer;
    position: absolute;
    font-size:2rem;
    right: 0;
    top: 2px;
    &>*{
        pointer-events: none;
    }
`;

export const ItemCont=styled.div`
    position: relative;
    margin:15px 5px;
`;