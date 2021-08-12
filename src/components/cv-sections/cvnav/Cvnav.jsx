import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Cvnav.css';

function Cvnav (props) {
    const [flagIncomplete, setFlagIncomplete] = useState(false);
    const [currPage, setCurrPage] = useState('default')

    const windowWidth = window.innerWidth

    useEffect(() => {
        setFlagIncomplete(false)
    }, [currPage])

    function setPage(page) {
        setCurrPage(page)
    }

    return (
        <section className="cvnav">

        {windowWidth >= 600
            ?<> 
                <h6 className="sections-header">sections</h6>
                    <div className="navlinks-wrap">
                    <Link to="/create/photo" onClick={()=>setPage('photo')} className='cvnavlinks'>photo</Link>
                    <Link to="/create/profile" onClick={()=>setPage('profile')} className='cvnavlinks'>profile</Link>
                    <Link to="/create/work-experience" onClick={()=>setPage('work')} className='cvnavlinks'>work experience</Link>   
                    <Link to="/create/education" onClick={()=>setPage('education')} className='cvnavlinks'>education</Link>
                    <Link to="/create/skills" onClick={()=>setPage('skills')} className='cvnavlinks'>skills</Link>
                    <Link to="/create/contact" onClick={()=>setPage('contact')} className='cvnavlinks'>contact</Link>
                    </div>

                    <Link id="view-btn" to={props.completed ? '/create/view' : '/create/view'} completed={props.completed} onClick={()=>setPage('view')} className={!props.completed ? "inactive cvnavlinks" : "cvnavlinks"} ><h3>view CV</h3></Link>
                <h4 className="section-incomplete">{flagIncomplete ? 'complete all the sections!' : ''}</h4>
            </>
            : <>
            <div id="create-nav-header">
                <h6 className="sections-header">sections</h6>
            <Link id="view-btn" to={props.completed ? '/create/view' : '/create/view'} completed={props.completed} onClick={()=>setPage('view')} className={!props.completed ? "inactive cvnavlinks" : "cvnavlinks"}>view CV</Link>
            </div>

                <div className="navlinks-wrap mobile">
                <Link to="/create/photo" onClick={()=>setPage('photo')} className='cvnavlinks'>photo</Link>
                <Link to="/create/profile" onClick={()=>setPage('profile')} className='cvnavlinks'>profile</Link>
                <Link to="/create/work-experience" onClick={()=>setPage('work')} className='cvnavlinks'>work experience</Link>   
                <Link to="/create/education" onClick={()=>setPage('education')} className='cvnavlinks'>education</Link>
                <Link to="/create/skills" onClick={()=>setPage('skills')} className='cvnavlinks'>skills</Link>
                <Link to="/create/contact" onClick={()=>setPage('contact')} className='cvnavlinks'>contact</Link>
                </div>
            <h4 className="section-incomplete">{flagIncomplete ? 'complete all the sections!' : ''}</h4>
        </>}

        </section>
    )
}

export default Cvnav;