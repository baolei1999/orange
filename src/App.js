import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Theatre from "./views/Theatre"
import Index from "./views/Index"
import Search from "./views/Search"
import My from "./views/My"
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <Route path={"/theatre"} component={Theatre}></Route>
      <Route path={"/search"} component={Search}></Route>
      <Route path={"/my"} component={My}></Route>
      <Route path={"/login"} exact component={Login}></Route>
      <Route path={"/"} exact component={Index}></Route>

    </div>
  );
}

export default App;
