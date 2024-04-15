import React from "react";
import "../index.css";
import { useSelector, useDispatch } from 'react-redux';

function Footer(){
    const bill = useSelector(state => state.totalbill);
    
    return(
        <div className="pay-page-footer">
            <div className="bill">Всего </div>
            <span>{bill}$</span>
            <div>
            <button>Оплатить через Kaspi.kz</button>
            </div>
        </div>

    )
}
export default Footer