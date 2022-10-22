import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/uiSlice";

function RoutesHandler({page}){
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(setCurrentPage(page));
    },[page,dispatch]);
    return(
        <></>
    );
}
export default RoutesHandler;