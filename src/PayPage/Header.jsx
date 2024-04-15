import React from "react";
import "../index.css";
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';

function Header(){
    const history = useHistory();
    const handleButtonClick = () => {

        history.goBack();
      };
    return(
        <div className="pay-page-header">
            <button onClick={handleButtonClick}>Back</button>
        </div>

    )
}
export default Header