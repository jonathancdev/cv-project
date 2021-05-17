import React, { useState, useRef } from 'react';
import InputStd from '../editable-forms/input-std'

function Duties (props) {

    const dutyRef = useRef();
    // function update(name) {
    //     setFileName(name);
    // }

    return (
        <section className="duties-wrap">
            <div>
                <p>add job duty</p>
                <button className="add-btn">
                    <i className="fas fa-plus"></i>
                </button>
            </div>

            <InputStd
            childRef={dutyRef}
            value={props.value[0]}
            >
                {/* isEditing input */}
                <input
                    ref={dutyRef}
                    className="rect-std"
                    placeholder='enter duty' //placeholder only applicable w/o text
                    value={props.value} //passes value to editable as it updates
                    onChange={(e) => {
                        props.setDuty(e, 0);
                     }}
                />
            </InputStd>

            <InputStd
            childRef={dutyRef}
            value={props.value[1]}
            >
                {/* isEditing input */}
                <input
                    ref={dutyRef}
                    className="rect-std"
                    placeholder='enter duty' //placeholder only applicable w/o text
                    value={props.value} //passes value to editable as it updates
                    onChange={(e) => {
                        props.setDuty(e, 1);
                     }}
                />
            </InputStd>

            <InputStd
            childRef={dutyRef}
            value={props.value[2]}
            >
                {/* isEditing input */}
                <input
                    ref={dutyRef}
                    className="rect-std"
                    placeholder='enter duty' //placeholder only applicable w/o text
                    value={props.value} //passes value to editable as it updates
                    onChange={(e) => {
                        props.setDuty(e, 2);
                     }}
                />
            </InputStd>
        </section>
    )
}


export default Duties;