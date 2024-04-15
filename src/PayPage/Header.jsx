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
            <button onClick={handleButtonClick}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrow-left" viewBox="0 0 16 10">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></button>
        </div>

    )
}
export default Header