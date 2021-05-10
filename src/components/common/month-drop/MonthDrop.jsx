import React from 'react';
import './MonthDrop.css';

function MonthDrop () {
    return (
        <section>
                <ul className="monthDrop">
                    <li name="January" value="Jan">January</li>
                    <li name="February" value="Feb">February</li>
                    <li name="March" value="Mar">March</li>
                    <li name="April" value="Apr">April</li>
                    <li name="May" value="May">May</li>
                    <li name="June" value="Jun">June</li>
                    <li name="July" value="Jul">July</li>
                    <li name="August" value="Aug">August</li>
                    <li name="September" value="Sep">September</li>
                    <li name="October" value="Oct">October</li>
                    <li name="November" value="Nov">November</li>
                    <li name="December" value="Dec">December</li>
                </ul>
        </section>
    )
}

export default MonthDrop;