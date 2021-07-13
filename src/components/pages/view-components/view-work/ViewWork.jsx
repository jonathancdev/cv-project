import { React } from 'react';

function ViewWork (props) {

    const work = localStorage.getObject(props.userId + '_work')

    function createWorkItems() {
        return work.map((obj) => {
            const duties = obj.duties

            return <div className="item-wrap">

                        { obj.title !=='click to edit title' ? <h4>{obj.title}</h4> : <h4>Position</h4> }

                        <div className="view-company-dates">

                        {obj.company !== 'click to edit company name' ? <h5>{obj.company}</h5> : null }

                            <p className="view-dates">
                                {(obj.monthOne === 'month' || obj.yearOne === 'year') ? null : obj.monthOne + ' '}
                                {obj.yearOne !== 'year' ? obj.yearOne : null}
                                {obj.yearOne !== 'year' ?
                                 <> to {(obj.monthTwo === 'month' || obj.yearTwo === 'year') ? null : obj.monthTwo + ' '} 
                                 {obj.yearTwo !== 'year' ? obj.yearTwo : null}</>
                                 : null}
                                </p>

                        </div>

                        <ul className="view-duties">
                            {duties.map(duty => {
                                return <li>{duty !== 'what did you do in this position?' ? duty : null}</li>
                            })}
                        </ul>
                    </div>
        })
    }
    return (
        <div className="view-wrapper work">
            <h3>EXPERIENCE</h3>
            {createWorkItems()}
        </div>
    )
}

export default ViewWork;