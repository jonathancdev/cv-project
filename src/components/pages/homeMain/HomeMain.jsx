import React from 'react';
import './HomeMain.css';
import { Link } from 'react-router-dom';
import cover from '../../../img/cover.png'

function HomeMain (props) {
    return (
        <section className="home-main">
            <section className="cover"><img src={cover} alt="cover"></img></section>
            <section className="text">
                <h1>The simple way to create a brilliant CV</h1>
                <p>Generate a refined CV in a matter of minutes</p>
                <p>Keep your personal and workplace information at the ready</p>
                <div id='try-btn-div'>
                    <Link to={props.active ? "/create" : "/signup"} id="try-btn">{props.active ? "go to CV" : "try it free"}</Link>
                </div>
                <p className="smallp">no strings attached!</p>
            </section>
        </section>
    )
}

export default HomeMain;