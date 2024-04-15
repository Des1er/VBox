import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './mainPage/MainPage';
import PayPage from './PayPage/pay';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore} from 'redux';
import data from "./mainPage/menu/MENU.json";
import "./index.css";
import { UPDATE_ITEM_NUMBER, CALCULATE_TOTALS } from './actions';


const initialState = {
  jsonData: data,
  totalnum: 0,
  totalbill: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM_NUMBER:
      const { categoryIndex, itemIndex, newNumber } = action.payload;
      const updatedData = [...state.jsonData];
      updatedData[categoryIndex].items[itemIndex].number = newNumber;
      return {
        ...state,
        jsonData: updatedData
      };
      case CALCULATE_TOTALS:
        const { bill, num} = action.payload;
        return{
          ...state,
          totalnum: num,
          totalbill: bill
        }
    default:
      return state;
  }
};

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={MainPage} />
          <Route path="/pay" component={PayPage} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
