import React from "react";
import "../index.css";
import { useSelector} from 'react-redux';
import MenuItem from "../mainPage/menu/Menu-Item";

function Body(){
    const data = useSelector(state =>state.jsonData) 
    return(
        <div className="pay-page-body">
           {data.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                    {category.items.map((item, itemIndex) => {
                    if (parseInt(item.number) > 0) {
                 
                        return (
                        <MenuItem
                            key={itemIndex}
                            item={item}
                            categoryIndex={categoryIndex}
                            itemIndex={itemIndex}
                        />
                        );
                    }
                    return null; 
                    })}
                </div>
            ))}
            <div className="microwave">
                <span className="checkbox-label">Нужна микроволновая печь?</span>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>

        </div>

    )
}
export default Body