import React, {useState} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Default, Cvnav, Profile, Photo, WorkExperience, Education, Skills, Contact } from '../../cv-sections'
import './Create.css';

function Create (props) {

    return (
        <section className="home-build">
            <Router>
                <section className="sidebar">
                    <p>{props.user.userId}</p>
                    <Cvnav userId={props.user.userId}/>
                </section>
                <section className="section-wrap">
                <Switch>
                        <Route path="/create" exact>
                            <Default />
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
                    </Switch>
                </section>
            </Router>
        </section>
    )
}

export default Create;