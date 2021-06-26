import { React, useState, useEffect, useRef } from 'react';
import './View.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '../../pages'
function View (props) {
    console.log(props)
    const photo = localStorage.getItem('avatar')
    return (
        <section className="view">
            {Object.keys(localStorage).includes('activeSession')
            ? <section className="section-wrap">
            <ViewPhoto userId={props.userId}/>
            <ViewProfile userId={props.userId}/>
            <ViewWork userId={props.userId}/>
            <ViewEducation userId={props.userId}/>
            <ViewSkills userId={props.userId}/>
            <ViewContact userId={props.userId}/>
        </section> 
            :             <section className="section-wrap">
            please log in
        </section> 
            }

        </section>
    )
}

export default View;