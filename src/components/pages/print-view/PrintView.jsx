import { React, useState, useEffect, useRef } from 'react';
import './PrintView.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '..'
import { Link } from 'react-router-dom';

function PrintView (props) {
    const photo = localStorage.getItem('avatar')
    const user = localStorage.getObject('currentUser')
    const printArea = useRef(null)
    function printIt () {
        window.location = "/print"
    }
    return (

        <section id="print-element" className="print-view view">
            {props.completed ?            
            <section className="section-wrap">
                <div ref={printArea} className="view-inner-wrap">
                    <div className="view-header view-sec">
                        <div className="color-block"></div>
                        <ViewPhoto userId={props.userId}/>
                        <div className="view-name-title">
                            <h1>{user.name} {user.surname}</h1>
                            <h2>{user.profession}</h2>
                        </div>
                    </div>
                    <div className="view-body">
                        <div className="view-side view-sec">
                            <ViewSkills userId={props.userId}/>
                            <ViewContact userId={props.userId}/>
                        </div>
                        <div className="view-main view-sec">
                            <ViewProfile userId={props.userId}/>
                            <ViewWork userId={props.userId}/>
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

export default PrintView;