import React, {useState, useEffect} from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Default, Cvnav, Profile, Photo, WorkExperience, Education, Skills, Contact } from '../../cv-sections'
import { checkStorage } from '../../common'
import { View } from '../../../components/pages'

import './Create.css';

function Create (props) {
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
            setCompleted(false)
        } else {

            setCompleted(true)
        }
    }

    return (
        <section className="home-build">
                <section className="sidebar">
                    <Cvnav completed={completed} userId={props.user.userId}/>
                </section>
                <section className="section-wrap">
                <Router>
                        <Route exact path="/create">
                            <Default updateComplete={checkCompleted} user={props.user}/>
                        </Route>
                        <Switch>
                        <Route path="/create/photo">
                            <Photo updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/profile">
                            <Profile updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/work-experience">
                            <WorkExperience updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/education">
                            <Education updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/skills">
                            <Skills updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/contact">
                            <Contact updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        <Route exact path="/create/view">
                            <View completed={completed} updateComplete={checkCompleted} userId={props.user.userId}/>
                        </Route>
                        </Switch>
                    </Router>
                </section>
        </section>
    )
}

export default Create;