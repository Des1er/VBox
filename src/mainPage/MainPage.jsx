import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import "../index.css"
import Menu from "./Menu";

function  MainPage() {
  
  const history = useHistory();
  const redirectToOtherPage = () => {
    history.push('/pay');
  };
 
  return (
    <div className="MainPage">
      <Header/>
      <Menu/>
      <Router>
        <Footer redirectToOtherPage={redirectToOtherPage} />
      </Router>
      
    </div>
  );
}

export default MainPage;
