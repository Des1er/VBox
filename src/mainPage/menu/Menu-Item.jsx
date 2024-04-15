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
    
    return (<article className="menu-item">
      
        <img src={item.icon} alt="" className="photo"/>
        <header className="item-info">
            <h4 >{item.name}</h4>
            <h4 className="price">{Number(item.price).toFixed(2)}$</h4>
        </header>
        <p className="description">{item.disciption}</p>
        <div className="numb">
            <div className="change-num">
                <button onClick={decreaseNumber}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>
                </button>
                <span className="selected-numb">{item.number}</span>
                <button onClick={increaseNumber}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
                </button>
            </div>
        </div>

    </article >)
}
export default MenuItem