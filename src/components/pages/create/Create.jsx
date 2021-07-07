import React, {useState, useEffect} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Default, Cvnav, Profile, Photo, WorkExperience, Education, Skills, Contact } from '../../cv-sections'
import { checkStorage } from '../../common'
import { View } from '../../../components/pages'

import './Create.css';

function Create (props) {
    const userId = props.user.userId
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        checkCompleted()
    }, [])

    function checkCompleted () {
        if ((!checkStorage(props.user.userId + '_avatar') || localStorage.getItem(props.user.userId + '_avatar') === 'enabled' ) ||
        !checkStorage(props.user.userId + '_profile') ||
        (!checkStorage(props.user.userId + '_work') || localStorage.getObject(props.user.userId + '_work').length < 1) ||
        (!checkStorage(props.user.userId + '_education') || localStorage.getObject(props.user.userId + '_education').length < 1) ||
        (!checkStorage(props.user.userId + '_skills')  || localStorage.getObject(props.user.userId + '_education').length < 1) ||
        (!checkStorage(props.user.userId + '_contact')  || (localStorage.getObject(props.user.userId + '_contact')[0].tel === 'telephone' || localStorage.getObject(props.user.userId + '_contact')[0].tel == '' ||
        localStorage.getObject(props.user.userId + '_contact')[0].email == 'email' || localStorage.getObject(props.user.userId + '_contact')[0].email === '') )
        ) {
            console.log('incomplete')
            setCompleted(false)
        } else {
            console.log('complete')

            setCompleted(true)
        }
    }
    console.log(props)

    return (
        <section className="home-build">
            <Router basename="/create">
                <section className="sidebar">
                    <Cvnav completed={completed} userId={props.user.userId}/>
                </section>
                <section className="section-wrap">
                        <Route exact path="/">
                            <Default updateComplete={checkCompleted} user={props.user}/>
                        </Route>
                        <Switch>
                        <Route path="/photo">
                            <Photo updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/profile">
                            <Profile updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/work-experience">
                            <WorkExperience updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/education">
                            <Education updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/skills">
                            <Skills updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/contact">
                            <Contact updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route exact path="/view">
                            <View completed={completed} updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                    </Switch>
                </section>
            </Router>
        </section>
    )
}

export default Create;