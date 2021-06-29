import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Cvnav.css';
import { checkStorage } from '../../common'

function Cvnav (props) {
    const [flagIncomplete, setFlagIncomplete] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [wasFlagged, setWasFlagged] = useState(false)

    function handleClick() {
        if (!checkStorage(props.userId + '_avatar') ||
            !checkStorage(props.userId + '_profile') ||
            (!checkStorage(props.userId + '_work') || localStorage.getObject(props.userId + '_work').length < 1) ||
            (!checkStorage(props.userId + '_education') || localStorage.getObject(props.userId + '_education').length < 1) ||
            (!checkStorage(props.userId + '_skills')  || localStorage.getObject(props.userId + '_education').length < 1) ||
            (!checkStorage(props.userId + '_contact')  || localStorage.getObject(props.userId + '_contact')[0].tel == 'telephone' )
        ) {
            setFlagIncomplete(true)
            console.log('sup')
        }
    }
    function resetFlag() {
        setFlagIncomplete(false)
        //setWasFlagged(false)
    }
    function checkComplete() {
        if (!checkStorage(props.userId + '_avatar') ||
            !checkStorage(props.userId + '_profile') ||
            (!checkStorage(props.userId + '_work') || localStorage.getObject(props.userId + '_work').length < 1) ||
            (!checkStorage(props.userId + '_education') || localStorage.getObject(props.userId + '_education').length < 1) ||
            (!checkStorage(props.userId + '_skills')  || localStorage.getObject(props.userId + '_education').length < 1) ||
            (!checkStorage(props.userId + '_contact')  || localStorage.getObject(props.userId + '_contact')[0].tel == 'telephone' )
        ) {
            setCompleted(false)
            resetFlag()
        } else {
            setCompleted(true)
            resetFlag()
        }
    }
    console.log(completed)
    return (
        <section className="cvnav">
            <h6>sections</h6>
            <Link to="/create/photo" className='cvnavlinks' onClick={checkComplete}>photo</Link>
            <Link to="/create/profile" className='cvnavlinks' onClick={checkComplete}>profile</Link>
            <Link to="/create/work-experience" className='cvnavlinks' onClick={checkComplete}>work experience</Link>   
            <Link to="/create/education" className='cvnavlinks' onClick={checkComplete}>education</Link>
            <Link to="/create/skills" className='cvnavlinks' onClick={checkComplete}>skills</Link>
            <Link to="/create/contact" className='cvnavlinks' onClick={checkComplete}>contact</Link>
            <Link to={completed ? '/create/view' : '#'} className="cvnavlinks" onClick={handleClick}><h3>view CV</h3></Link>
            <h4 className="section-incomplete">{flagIncomplete ? 'complete all the sections!' : ''}</h4>  
        </section>
    )
}

export default Cvnav;