import { HeaderCont } from "./Header.styles";

function Header({children}){
    return(
        <HeaderCont>
            {children}
        </HeaderCont>
    );
}
export default Header