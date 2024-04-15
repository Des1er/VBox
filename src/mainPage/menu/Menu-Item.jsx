import React from 'react';
import "../../index.css";
import { useSelector, useDispatch } from 'react-redux';
import { updateItemNumber , calculateTotals} from '../../actions';


function MenuItem({item, categoryIndex, itemIndex  }){
    const dispatch = useDispatch();
    const bill = useSelector(state => state.totalbill);
    const totalNum = useSelector(state => state.totalnum);



    const increaseNumber = () => {
        
        const newNumber = Number(item.number + 1);
        console.log(categoryIndex, itemIndex, newNumber, item.name)
        dispatch(updateItemNumber(categoryIndex, itemIndex, newNumber));
        dispatch(calculateTotals(bill + Number(item.price),totalNum + 1));

      };
    
      const decreaseNumber = () => {
        if (item.number > 0){
            const newNumber = Number(Math.max(0, Number(item.number - 1))); 
            console.log(categoryIndex, itemIndex, newNumber, item.name)
            dispatch(updateItemNumber(categoryIndex, itemIndex, newNumber));
            dispatch(calculateTotals(bill - Number(item.price),Number(totalNum - 1)))
        }
      };
    
    return (<div className="menuItem">
        <div className="icone">
            <img src={item.icon} alt="" />
        </div>
        <div className="info">
            <div className="name">{item.name}</div>
            <div className="price">{item.price}$</div>
        </div>
        <div className="description">{item.disciption}</div>
        <div className="numb">
            <div className="change-num">
                <button onClick={decreaseNumber}>-</button>
                <div className="selected-numb">{item.number}</div>
                <button onClick={increaseNumber}>+</button>
            </div>
        </div>

    </div>)
}
export default MenuItem