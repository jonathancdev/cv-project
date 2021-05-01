import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Cvnav, Profile, Photo, WorkExperience, Education, Skills, Contact } from '../../cv-sections'
import './Create.css';

function Create () {
    return (
        <section className="home-build">
            <Router>
                <section className="sidebar">
                    <Cvnav />
                </section>
                <section className="section-wrap">
                <Switch>
                        <Route path="/create/photo">
                            <Photo />
                        </Route>
                        <Route path="/create/profile">
                            <Profile />
                        </Route>
                        <Route path="/create/work-experience">
                            <WorkExperience />
                        </Route>
                        <Route path="/create/education">
                            <Education />
                        </Route>
                        <Route path="/create/skills">
                            <Skills />
                        </Route>
                        <Route path="/create/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </section>
            </Router>
        </section>
    )
}

export default Create;