import React,{useEffect} from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout"
import Login from "./components/Login/Login"
import { useStateValue } from "./contextAPI/StateProvider";
import { auth } from "./firebase";

function App() {

  const [{user},dispatch]=useStateValue();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

    return()=>{
      unsubscribe()
    }
  },[])


  return (
    <Router>
      <div className="app">
        <Switch>

          <Route path="/" exact>
            <Header />
            <Home />
            <h1>HOME Page</h1>
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
