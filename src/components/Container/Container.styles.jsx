import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

export const BtnIcon=styled(MdDeleteOutline)`
    pointer-events: none;
    font-size: 1.25rem;
    position: relative;
    top: 3px;
`;

export const DeleteBtn=styled.button`
    background: #EB5757;
    color: white;
    border-radius: 4px;
    font-weight: 600;
    font-size: 1.167rem;
    padding: 12px 35px;
    text-align: center;
    width: fit-content;
    outline: none;
    border: none;
    margin:25px 0 5px auto;
    cursor: pointer;
    :hover{
        opacity:.8;
    }
`;

export const Cont=styled.div`
    width:95%;
    max-width:610px;
    height: 100%;
    min-height: 100vh;   
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
`;