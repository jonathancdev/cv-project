import { React, useState, useEffect, useRef } from 'react';
import './View.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '../../pages'
function View () {

    const [state1, setState1] = useState('state');
    const photo = localStorage.getItem('avatar')
    return (
        <section className="view">
            <section className="section-wrap">
                <ViewPhoto/>
                <ViewProfile/>
                <ViewWork/>
                <ViewEducation/>
                <ViewSkills/>
                <ViewContact/>
            </section> 
        </section>
    )
}

export default View;