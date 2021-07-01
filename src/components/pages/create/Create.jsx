import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Default, Cvnav, Profile, Photo, WorkExperience, Education, Skills, Contact } from '../../cv-sections'
import { checkStorage } from '../../common'
import { View } from '../../../components/pages'

import './Create.css';

function Create (props) {
    const userId = props.user.userId
    const [completed, setCompleted] = useState(false)

    function checkCompleted () {
        if (!checkStorage(props.user.userId + '_avatar') ||
        !checkStorage(props.user.userId + '_profile') ||
        (!checkStorage(props.user.userId + '_work') || localStorage.getObject(props.user.userId + '_work').length < 1) ||
        (!checkStorage(props.user.userId + '_education') || localStorage.getObject(props.user.userId + '_education').length < 1) ||
        (!checkStorage(props.user.userId + '_skills')  || localStorage.getObject(props.user.userId + '_education').length < 1) ||
        (!checkStorage(props.user.userId + '_contact')  || localStorage.getObject(props.user.userId + '_contact')[0].tel == 'telephone' )
        ) {
            console.log('incomplete')
            setCompleted(false)
        } else {
            console.log('complete')

            setCompleted(true)
        }
    }
    console.log('create page completed = ' + completed)

    return (
        <section className="home-build">
            <Router>
                <section className="sidebar">
                    <Cvnav completed={completed} userId={props.user.userId}/>
                </section>
                <section className="section-wrap">
                <Switch>
                        <Route path="/create" exact>
                            <Default updateComplete={checkCompleted} user={props.user}/>
                        </Route>
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
                </section>
            </Router>
        </section>
    )
}

export default Create;