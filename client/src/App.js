import React from "react";
import Navbar from "./components/Navbar/index";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved"
import Search from "./pages/Search"



function App() {
  return (
    <div>
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
      
    </div>
  );
}


export default App;

