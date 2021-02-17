import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inventories from "./components/inventory-list.component"
import Inventory from "./components/inventory.component";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  
  return (
    
      <div className="container-fluid">
      <BrowserRouter>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Chip's Computers
          </a>
          <div className="nav nav-pills">
            <li className="nav-item">
            <Link className="nav-link " to="/">Inventories</Link>
            </li>
          </div>
        </nav>
        
        <Switch>
          <Route exact path="/" component={Inventories} />
          <Route exact path="/manageinventory" component={Inventories} />
          <Route exact path="/manageinventory/add" component={Inventory} />
          <Route exact path="/manageinventory/view/:id" component={Inventory} />
          <Route exact path="/manageinventory/edit/:id" component={Inventory} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
