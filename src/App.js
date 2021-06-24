import React from "react";
import MyComponent from "./app/index";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MyComponent} />
      </Switch>
    </Router>
  );
}

export default App;
