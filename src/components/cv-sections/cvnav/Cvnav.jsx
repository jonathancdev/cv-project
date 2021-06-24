import React from 'react';
import { Link } from 'react-router-dom';
import './Cvnav.css';
import { checkStorage } from '../../common'

function Cvnav (props) {
    const user = props.userId
    function allStorageFound() {
        const id = props.userId
        if(
            checkStorage(id + '_avatar') &&
            checkStorage(id + '_contact') &&
            checkStorage(id + '_education') &&
            checkStorage(id + '_path') &&
            checkStorage(id + '_profile') &&
            checkStorage(id + '_skills') &&
            checkStorage(id + '_work')
        ) {
            console.log(true)
            return true
        } else {
            alert('oops, some information is missing')
            return false
        }
    }

    return (
        <section className="cvnav">
            <h6>sections</h6>
            <Link to="/create/photo" className="cvnavlinks">photo</Link>
            <Link to="/create/profile" className="cvnavlinks">profile</Link>
            <Link to="/create/work-experience" className="cvnavlinks">work experience</Link>   
            <Link to="/create/education" className="cvnavlinks">education</Link>
            <Link to="/create/skills" className="cvnavlinks">skills</Link>
            <Link to="/create/contact" className="cvnavlinks">contact</Link>
            <Link to={allStorageFound() ? '/view' : '/create'} onClick={allStorageFound} className="cvnavlinks">view CV</Link>  
        </section>
    )
}

export default Cvnav;