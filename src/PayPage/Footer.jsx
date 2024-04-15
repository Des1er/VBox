import React from "react";
import "../index.css";
import { useSelector, useDispatch } from 'react-redux';

function Footer(){
    const bill = useSelector(state => state.totalbill);
    
    return(
        <footer className="pay-page-footer">
            <div className="footer-info">
                <span className="bill">Всего </span>
                <span>{bill}$</span>
            </div>
            <button>Оплатить через Kaspi.kz</button>
            
        </footer>

    )
}
export default Footer