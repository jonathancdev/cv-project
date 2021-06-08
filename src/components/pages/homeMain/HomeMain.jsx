import React from 'react';
import './HomeMain.css';
import cover from '../../../img/cover.png'

function HomeMain () {
    return (
        <section className="home-main">
            <section className="cover"><img src={cover} alt="cover"></img></section>
            <section className="text">
                <h1>The simple way to create a brilliant CV</h1>
                <p>Generate a refined CV in a matter of minutes</p>
                <p>Keep your personal and workplace information at the ready</p>
                <button id="try-btn">try it free</button>
                <p className="smallp">no strings attached!</p>
            </section>
        </section>
    )
}

export default HomeMain;