import React from 'react';
import "../index.css";
import { useSelector, useDispatch } from 'react-redux';
function Footer(props ){
    const bill = useSelector(state => state.totalbill);
    const totalNum = useSelector(state => state.totalnum);

    return(
        <div className="footer">
            <button onClick={props.redirectToOtherPage}>{totalNum} за {bill}</button>
        </div>

    )
}
export default Footer