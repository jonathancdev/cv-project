import './App.css';
import {React, useState, useRef} from "react";
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { Header, Footer, storeObjects, checkStorage, removeStorage } from './components/common';
import { HomeMain, Create, Pricing, Login, Signup, Account, Help, View, Print } from './components/pages'


function App() {
  storeObjects()

  function isUser() {
    if (Object.keys(localStorage).includes('currentUser')) {
      return true
    } else {
      return false
    }
  }
  
  const [currentUser, setCurrentUser] = useState(isUser() ? localStorage.getObject('currentUser') : null)
  const [activeSession, setActiveSession] = useState(Object.keys(localStorage).includes('activeSession') ? true : false)
  const [hideElements, setHideElements] = useState(false)

  function setUser(obj) {
    setCurrentUser(obj)
    setActiveSession(true)
    localStorage.setObject('currentUser', obj)
    localStorage.setItem('activeSession', true)
  }

  function endSession() {
    setCurrentUser(null)
    setActiveSession(false)
    removeStorage('activeSession')
  }
  function hide() {
    setHideElements(true)
  }
  function show() {
    setHideElements(false)
  }
  console.log(currentUser)
  return (
    <div className="App">
      <Router>
        <header>
          { !hideElements
          ? <Header id="site-header" logOut={endSession} active={activeSession} user={currentUser}/>
          : null}
        </header>
        <main>
        <Switch>
            <Route path="/" exact>
              <HomeMain active={activeSession}/>
            </Route>
            <Route path="/create">
              <Create user={currentUser} />
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
              <Account logOut={endSession} user={currentUser}/>
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route render={(props) => <Print hide={hide} show={show} user={currentUser} />} path="/print" />
          </Switch>
        </main>
        <footer>
          { !hideElements
          ? <Footer />
          : null }
        </footer>
      </Router>
    </div>
  );
}
export default App;
