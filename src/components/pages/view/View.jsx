import { React, useState, useEffect, useRef } from 'react';
import './View.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '../../pages'
function View (props) {
    const photo = localStorage.getItem('avatar')
    console.log(props)
    return (
        <section className="view">
            {props.completed
            ? <section className="section-wrap">
            <ViewPhoto userId={props.userId}/>
            <ViewProfile userId={props.userId}/>
            <ViewWork userId={props.userId}/>
            <ViewEducation userId={props.userId}/>
            <ViewSkills userId={props.userId}/>
            <ViewContact userId={props.userId}/>
        </section> 
            : <section className="section-wrap">
                <div className="view-error">you must complete all sections</div>
            </section> 
            }

        </section>
    )
}

export default View;