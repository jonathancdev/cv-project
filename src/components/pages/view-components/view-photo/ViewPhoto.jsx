import { React } from 'react';
import img from '../../../../img/AI_photo.jpg'

function ViewPhoto (props) {

    const photo = localStorage.getItem(props.userId + '_avatar')
    console.log(photo)
    return (
        <div className="view-wrapper photo">
            <div className="photo-border">
                {photo === 'disabled'
                ? null
            : <img id="view-avatar" src={props.userId === 'cvIDJ4B6P12' && photo === 'test user' ? img : photo} alt="photo"></img>}
            </div>
        </div>
    )
}

export default ViewPhoto;