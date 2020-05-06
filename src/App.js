import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Theatre from "./views/Theatre"
import Index from "./views/Index"
import Search from "./views/Search"
import My from "./views/My"

function App() {
  return (
    <div className="App">
      <Route path={"/"} exact component={Index}></Route>
      <Route path={"/theatre"} component={Theatre}></Route>
      <Route path={"/search"} component={Search}></Route>
      <Route path={"/my"} component={My}></Route>

    </div>
  );
}

export default App;
