import styled from "styled-components";

export const AddButton=styled.button`
    all: unset;
    color: white;
    font-weight: 600;
    font-size: 1.167rem;
    text-align: center;
    background: #2F80ED;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    border-radius: 12px;
    flex-grow: 1;
    cursor: pointer;
    :hover{
        opacity:.75;
    }
`;

export const Box=styled.input`
    outline: none;
    width:80%;
    border: 1px solid #BDBDBD;
    border-radius: 12px;
    padding: 20px 12px;
    color: #363636;
    font-weight: 600;
    :focus{
        box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
    }
    ::placeholder{
        color: #828282;
        font-weight:400;
    }
`;

export const Container=styled.div`
    display: flex;
    gap: 25px;
    margin-bottom: 15px;
    @media screen and (max-width:575px) {
        gap:15px;
        flex-direction: column;
        ${Box}{
            width:unset;
        }
        ${AddButton}{
            padding:17px 0;
            letter-spacing: 1px;
            font-size: 1.4rem;
        }
    }
`;