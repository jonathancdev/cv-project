import './App.css';
import {React, useState} from "react";
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Header, Footer, storeObjects, removeStorage } from './components/common';
import { HomeMain, Create, Pricing, Login, Signup, Account, Help, Print } from './components/pages'

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

  return (
    <div className="App">
      <Router>
        <header>
          { !hideElements
          ? <Header id="site-header" logOut={endSession} active={activeSession} user={currentUser}/>
          : null}
        </header>
        <main>
        <Route exact path="/">
              <HomeMain active={activeSession}/>
        </Route>
        <Switch> 
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
