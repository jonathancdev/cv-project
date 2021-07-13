import { React, useRef } from 'react';
import './View.css';
import { ViewPhoto, ViewProfile, ViewWork, ViewEducation, ViewSkills, ViewContact } from '../../pages'
import { Link } from 'react-router-dom';

function View (props) {
    const user = localStorage.getObject('currentUser')
    const printArea = useRef(null)

    return (
        <div>
            {props.completed ?
            <Link className="print-btn" to="/print">print or save to .pdf</Link> : null}
            <section id="print-element" className="view">
                {props.completed ?
                
                <section className="section-wrap">
                    <div ref={printArea} className="view-inner-wrap">
                        <div className="view-header view-sec">
                            <div className="color-block"></div>
                            <ViewPhoto userId={props.userId}/>
                            <div className="view-name-title">
                                <h1>{user.name} {user.surname}</h1>
                                {user.profession !== 'profession'
                                ? <h2>{user.profession}</h2>
                                : null}
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

                : 
                    <div className="view-error">complete all of the sections</div>

                }

            </section>
        </div>
    )
}

export default View;