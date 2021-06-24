import './App.css';
import {React, useState} from "react";
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { Header, Footer, storeObjects } from './components/common';
import { HomeMain, Create, Pricing, Login, Signup, Account, Help, View } from './components/pages'


function App() {
  storeObjects()

  const [currentUser, setCurrentUser] = useState(Object.keys(localStorage).includes('currentUser') ? localStorage.getObject('currentUser') : null)
  const [activeSession, setActiveSession] = useState(Object.keys(localStorage).includes('activeSession') ? true : false)


  function setUser(obj) {
    setCurrentUser(obj)
    setActiveSession(true)
    localStorage.setObject('currentUser', obj)
    localStorage.setItem('activeSession', true)
  }

  function endSession() {
    setCurrentUser(null)
    setActiveSession(false)
    localStorage.removeItem('activeSession')
  }

  return (
    <div className="App">
      <Router>
        <header>
          <Header user={currentUser}/>
          <div>{currentUser !== null ? currentUser.name : null }</div>
          <div>
            {activeSession 
              ? <button onClick={endSession}>logout</button> 
              : 'inactive' }
              </div>

        </header>
        <main>
        <Switch>
            <Route path="/" exact>
              <HomeMain />
            </Route>
            <Route path="/create" exact>
              <Create user={Object.keys(localStorage).includes('activeSession') ? currentUser : ''} />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/login">
              <Login setUser={setUser}/>
            </Route>
            <Route path="/signup">
              <Signup setUser={setUser}/>
            </Route>
            <Route path="/account">
              <Account user={currentUser}/>
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route exact path="/view" component={withRouter(View)}>
              <View user={currentUser}/>
            </Route>
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
