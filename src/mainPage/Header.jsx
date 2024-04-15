import React from "react";
import "../index.css";

function Header(){
    return (<div className="header">
        <div className="main-icon" ><img src={require("../images/main-icon.png")} alt="" /></div>
    </div>)
}
export default Header