import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Inventories from "./components/inventory-list.component"
import Inventory from "./components/inventory.component";
import { Switch,  Route,  Link} from "react-router-dom";

function App() {
  
  return (
      <div className="container-fluid">
      <div >
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Chip's Computers
          </a>
          <div className="nav nav-pills">
            <li className="nav-item">
            <Link className="nav-link " to="/">Inventories</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/inventory">Add</Link>
            </li>
          </div>
        </nav>
        <Switch>
          <Route path="/inventory/" render={() => (
            <Inventory onAddUpdateInventory={(inventory) => console.log(inventory)} />
          )} />
          <Route exact path="/" component={Inventories} />
        </Switch>
        </div>
    </div>
  );
}

export default App;
