import { NavItem, NavbarCont } from "./Navbar.styles";

function Navbar(){
    return(
        <NavbarCont>
            <NavItem to='/' end>All</NavItem>
            <NavItem to='/active'>Active</NavItem>
            <NavItem to='/completed'>Completed</NavItem>
        </NavbarCont>
    );
}
export default Navbar;