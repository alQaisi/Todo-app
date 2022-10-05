import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem=styled(NavLink)`
    all:unset;
    font-weight: 600;
    font-size: 1.167rem;
    color: #333333;
    cursor: pointer;
    position: relative;
    &:hover{
        opacity:.75;
    }
    &::after{
        content:"";
        display: block;
        position: absolute;
        height:0;
        width: 89px;
        background: #2F80ED;
        border-radius: 4px 4px 0px 0px;
        bottom:-15px;
        left:50%;
        transition: height .25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: translateX(-50%);
    }
    &.active::after{
        height:4px;
    }
    @media screen and (max-width:575px) {
        ::after{
            width: 100%;
        }
        flex-grow: 1;
        text-align: center;
    }
`;

export const NavbarCont=styled.nav`
    display: flex;
    justify-content: space-around;
    border-bottom:1px solid #BDBDBD;
    padding-bottom: 15px;
    margin:32px 0 18px;
    @media screen and (max-width:575px) {
        width:90%;
        margin:32px auto 18px;
        justify-content:space-between;
    }
`;