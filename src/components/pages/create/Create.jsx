import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Default, Cvnav, Profile, Photo, WorkExperience, Education, Skills, Contact } from '../../cv-sections'
import { View } from '../../../components/pages'

import './Create.css';

function Create (props) {

    return (
        <section className="home-build">
            <Router>
                <section className="sidebar">
                    <Cvnav userId={props.user.userId}/>
                </section>
                <section className="section-wrap">
                <Switch>
                        <Route path="/create" exact>
                            <Default user={props.user}/>
                        </Route>
                        <Route path="/create/photo">
                            <Photo userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/profile">
                            <Profile userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/work-experience">
                            <WorkExperience userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/education">
                            <Education userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/skills">
                            <Skills userId={props.user.userId}/>
                        </Route>
                        <Route path="/create/contact">
                            <Contact userId={props.user.userId}/>
                        </Route>
                        <Route exact path="/create/view">
                            <View userId={props.user.userId}/>
                        </Route>
                    </Switch>
                </section>
            </Router>
        </section>
    )
}

export default Create;