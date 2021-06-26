import React from 'react';
import './Default.css';

function Default (props) {
    return (

        <section className="cv-sec-wrap">
                <section className="default">
                    <h1>Hello, {props.user.name}!</h1>
                    <div className="pwrap">
                        <p>Choose a CV section from the navigation bar to add or edit information for that element.
                            Save your changes as you go. Come and go as you need to edit and update your CV.</p>
                    </div>
                </section>
        </section>
    )
}

export default Default;