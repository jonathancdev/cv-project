import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { Header, Footer, storeObjects } from './components/common';
import { HomeMain, Create, Pricing, Login, Signup, Help, View } from './components/pages'

function App() {
  storeObjects()
  return (
    <div className="App">
      <Router>
        <header>
          <Header />
        </header>
        <main>
        <Switch>
            <Route path="/" exact>
              <HomeMain />
            </Route>
            <Route path="/create" exact>
              <Create />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route exact path="/view" component={withRouter(View)} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
