import { React, useState, useEffect, useRef } from 'react';

function ViewContact (props) {

    const [state1, setState1] = useState('state');
    const contact = localStorage.getObject(props.userId + '_contact')
    const address = contact[0].address.split(/\r?\n/);
    function outputAddress() {
        return address.map(line => {
            return <p>{line}</p>
        })
    }
    console.log(address)
    return (
        <div className="view-wrapper contact">
            <p>tel: {contact[0].tel}</p>
            <p>{contact[0].email}</p>
            {outputAddress()}
        </div>
    )
}

export default ViewContact;