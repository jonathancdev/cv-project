import { React, useState, useEffect, useRef } from 'react';
import './View.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '../../pages'
function View (props) {
    const photo = localStorage.getItem('avatar')
    const user = localStorage.getObject('currentUser')
    
    console.log(user)
    return (

        <section className="view">
            {props.completed ?
            
            <section className="section-wrap">
                <div className="view-inner-wrap">
                    <div className="view-header view-sec">
                        <ViewPhoto userId={props.userId}/>
                        <div className="view-name-title">
                            <h1>{user.name} {user.surname}</h1>
                            <h2>{user.profession}</h2>
                        </div>
                    </div>
                    <div className="view-body">
                        <div className="view-side view-sec">
                            <h3>SKILLS</h3>
                            <ViewSkills userId={props.userId}/>
                            <h3>CONTACT</h3>
                            <ViewContact userId={props.userId}/>
                        </div>
                        <div className="view-main view-sec">
                            <h3>PROFILE</h3>
                            <ViewProfile userId={props.userId}/>
                            <h3>EXPERIENCE</h3>
                            <ViewWork userId={props.userId}/>
                            <h3>EDUCATION</h3>
                            <ViewEducation userId={props.userId}/>
                        </div>
                    </div>
                </div>
            </section> 

            : <section className="section-wrap">
                <div className="view-error">you must complete all sections</div>
            </section> 
            }

        </section>
    )
}

export default View;