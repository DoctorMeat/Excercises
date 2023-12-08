import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Chips from "./Chips";
import Soda from "./Soda";
import Chocolate from "./Chocolate";
import VendingMachine from "./VendingMachine";



function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <VendingMachine/>

        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/chocolate">
          <Chocolate />
        </Route>
      </BrowserRouter>
    </main>
  );
}

export default App;