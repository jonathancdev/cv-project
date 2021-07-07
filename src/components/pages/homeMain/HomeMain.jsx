import React from 'react';
import './HomeMain.css';
import { Link } from 'react-router-dom';
import cover from '../../../img/cover.png'

function HomeMain (props) {
    return (
        <section className="home-main">
            <section className="cover"><img src={cover} alt="cover"></img></section>
            <section className="text">
                <h1>An easy way to create an amazing CV</h1>
                <p>Generate a refined CV in a matter of minutes</p>
                <p>Save your information for quick access anytime</p>
                <div id='try-btn-div'>
                    <Link to={props.active ? "/create" : "/signup"} id="try-btn">{props.active ? "go to CV" : "try it free"}</Link>
                </div>
            </section>
        </section>
    )
}

export default HomeMain;