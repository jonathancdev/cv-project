import React, { useEffect } from 'react';
import PrintView from '../print-view'
import './Print.css';
import { Link } from 'react-router-dom';

function Print (props) {
    useEffect(() => {
        props.hide()
        setTimeout(window.print, 1000)
        return () => props.show()
    }, [])
    return (
        <section className="print">
                        <Link className="back-btn" to="/create">go back</Link>

            <section className="section-wrap">
            <PrintView completed={true} userId={props.user.userId}/>
            </section> 
        </section>
    )
}

export default Print;