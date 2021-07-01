import './App.css';
import {React, useState} from "react";
import { Route, BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import { Header, Footer, storeObjects, checkStorage, removeStorage } from './components/common';
import { HomeMain, Create, Pricing, Login, Signup, Account, Help, View } from './components/pages'


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
  // const [avatarFound, setAvatarFound] = useState(isUser() && checkStorage(currentUser.userId + '_avatar') ? true : false)
  // const [contactFound, setContactFound] = useState(isUser() && checkStorage(currentUser.userId + '_contact') ? true : false)
  // const [educationFound, setEducationFound] = useState(isUser() && checkStorage(currentUser.userId + '_education') ? true : false)
  // const [profileFound, setProfileFound] = useState(isUser() && checkStorage(currentUser.userId + '_profile') ? true : false)
  // const [skillsFound, setSkillsFound] = useState(isUser() && checkStorage(currentUser.userId + '_skills') ? true : false)
  // const [workFound, setWorkFound] = useState(isUser() && checkStorage(currentUser.userId + '_work') ? true : false)
  const [activeSession, setActiveSession] = useState(Object.keys(localStorage).includes('activeSession') ? true : false)
  // const [infoComplete, setInfoComplete] = useState(false)


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
  return (
    <div className="App">
      <Router>
        <header>
          <Header logOut={endSession} active={activeSession} user={currentUser}/>
        </header>
        <main>
        <Switch>
            <Route path="/" exact>
              <HomeMain active={activeSession}/>
            </Route>
            <Route path="/create" exact>
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
