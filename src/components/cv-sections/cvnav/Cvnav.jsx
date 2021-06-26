import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Cvnav.css';
import { checkStorage } from '../../common'

function Cvnav (props) {
    const [flagIncomplete, setFlagIncomplete] = useState(false);
    const [wasFlagged, setWasFlagged] = useState(false)

    function handleClick() {
        if (!checkStorage(props.userId + '_avatar') &&
            !checkStorage(props.userId + '_profile') &&
            !checkStorage(props.userId + '_work') &&
            !checkStorage(props.userId + '_education' &&
            !checkStorage(props.userId + '_skills') &&
            !checkStorage(props.userId + '_contact')
        )) {
            setFlagIncomplete(true)
        }
    }
    function resetFlag() {
        setFlagIncomplete(false)
        setWasFlagged(false)
    }
    return (
        <section className="cvnav">
            <h6>sections</h6>
            <Link to="/create/photo" className='cvnavlinks' onClick={resetFlag}>photo</Link>
            <Link to="/create/profile" className='cvnavlinks' onClick={resetFlag}>profile</Link>
            <Link to="/create/work-experience" className='cvnavlinks' onClick={resetFlag}>work experience</Link>   
            <Link to="/create/education" className='cvnavlinks' onClick={resetFlag}>education</Link>
            <Link to="/create/skills" className='cvnavlinks' onClick={resetFlag}>skills</Link>
            <Link to="/create/contact" className='cvnavlinks' onClick={resetFlag}>contact</Link>
            <Link to={props.complete ? '/create/view' : '#'} className="cvnavlinks" onClick={handleClick}><h3>view CV</h3></Link>
            <h4 className="section-incomplete">{flagIncomplete && !wasFlagged ? 'complete all the sections!' : ''}</h4>  
        </section>
    )
}

export default Cvnav;