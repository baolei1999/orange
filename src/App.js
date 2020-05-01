import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Theatre from "./views/Theatre"
import Index from "./views/Index"

function App() {
  return (
    <div className="App">
      <Route path={"/"} exact component={Index}></Route>
      <Route path={"/theatre"} component={Theatre}></Route>
    </div>
  );
}

export default App;
