import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import './App.css';
import NoMatch from "./pages/NoMatch"
import Search from "./pages/search"

function App() {
  return (
    <BrowserRouter>
    <div>
      <Nav />
      <Switch>
        <Route exact path={["/"]}>
          <Search />
        </Route>
        <Route exact path="/books/:id">
          <Search />
        </Route>
        <Route >
          <NoMatch />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
