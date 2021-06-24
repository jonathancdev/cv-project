import { React, useState, useEffect, useRef } from 'react';
import './View.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '../../pages'
function View (props) {

    const photo = localStorage.getItem('avatar')
    return (
        <section className="view">
            {Object.keys(localStorage).includes('activeSession')
            ? <section className="section-wrap">
            <ViewPhoto userId={props.user.userId}/>
            <ViewProfile userId={props.user.userId}/>
            <ViewWork userId={props.user.userId}/>
            <ViewEducation userId={props.user.userId}/>
            <ViewSkills userId={props.user.userId}/>
            <ViewContact userId={props.user.userId}/>
        </section> 
            :             <section className="section-wrap">
            please log in
        </section> 
            }

        </section>
    )
}

export default View;