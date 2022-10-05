import { useEffect, useContext } from "react";
import { UiContext } from "../../components/context/uiContext.context";

function RoutesHandler({page}){
    const { setCurrentPage } =useContext(UiContext);
    useEffect(()=>{
        setCurrentPage(page);
    },[setCurrentPage,page]);
    return(
        <></>
    );
}
export default RoutesHandler;