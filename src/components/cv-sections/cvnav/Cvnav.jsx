import React from 'react';
import { Link } from 'react-router-dom';
import './Cvnav.css';

function Cvnav () {
    return (
        <section className="cvnav">
            <h6>sections</h6>
            <Link to="/create/photo" className="cvnavlinks">photo</Link>
            <Link to="/create/profile" className="cvnavlinks">profile</Link>
            <Link to="/create/work-experience" className="cvnavlinks">work experience</Link>   
            <Link to="/create/education" className="cvnavlinks">education</Link>
            <Link to="/create/skills" className="cvnavlinks">skills</Link>
            <Link to="/create/contact" className="cvnavlinks">contact</Link>
            <Link to="/view" className="cvnavlinks">view CV</Link>  
        </section>
    )
}

export default Cvnav;