import React from 'react';
import "../index.css";
import MenuItem from "./menu/Menu-Item";
import { useSelector, useDispatch } from 'react-redux';

function Menu(){
    const data = useSelector(state =>state.jsonData) 

    return (<div className="menu">
        {data.map((category,categoryIndex)=>(<div key={categoryIndex}>
            <h1 className='category_name'>{category.type}</h1>
            {category.items.map((item, itemIndex)=>(
                (<MenuItem key = {itemIndex} 
                item={item}
                categoryIndex={categoryIndex}
                itemIndex={itemIndex} />)
            ))}
            </div>
        ))}

    </div>)
}
export default Menu