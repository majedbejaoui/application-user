
import React, { useState } from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Nav from "./components/layout/Nav";
import AddUser from "./components/users/AddUser";
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([])


  return (
    <Router>
      <div className="App">
        <h2>projet chekpoint </h2>
        <Nav />
        <Switch>
          <Route exact path="/" render={(props) => <Home users={users} />} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" render={(props) => <AddUser 
         />} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
