import React, {useEffect} from 'react';
import './Default.css';

function Default (props) {

    useEffect( () => {
        return () => {
            props.updateComplete()
        }
    }, [])

    return (
        <section className="cv-sec-wrap">
                <section className="default">

                    {props.user.userId === 'cvIDJ4B6P12'
                    ?<>
                    <h1>Welcome!</h1>
                    <div className="pwrap">
                        <p>Feel free to explore our friend Jane's CV by clicking 'view CV'. You can even make changes to see how everything works. 
                            Sign out of Jane's account when you are ready to sign up yourself. It's totally free!</p>
                    </div>
                    </>
                    : <>
                    <h1>Hello, {props.user.name}!</h1>
                    <div className="pwrap">
                        <p>Complete each CV section on the left. Save all of the changes before you move on! 
                            When all sections have been been completed you can preview the document. Return as needed to
                            edit or update your CV!</p>
                    </div> </>}

                </section>
        </section>
    )
}

export default Default;