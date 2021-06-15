import React, { Component, createRef } from 'react';
import './PhotoInput.css';

class PhotoInput extends Component {
    constructor(props) {
        super(props)

        this.getPath = this.getPath.bind(this);
        this.onChange = this.onChange.bind(this);
        //this.uploadPhoto = this.uploadPhoto.bind(this);

        this.fileDisplay = createRef();
        this.fileInput = createRef();
    }

     getFile(e) {
         const file = e.target.files[0];
         const reader = new FileReader();
         reader.onload = r => {
             this.props.updateAvatar(r.target.result)
         }
         reader.readAsDataURL(file);
     }
    
    getPath() {
         const path = this.fileInput.current.files[0].name;
         this.fileDisplay.current.value = path;
         this.props.updatePath(path)
    }
    onChange(e) {
        this.getPath();
        this.getFile(e);
    }

    render() {
        return(
            <section key={this.props.path}>
                <input className="rect-std" placeholder={this.props.path} disabled ref={this.fileDisplay}></input>
                <input onChange={this.onChange} id="browse-btn" type="file" hidden ref={this.fileInput}></input>
                <label htmlFor="browse-btn" id="btn-lbl"><div id="btn-layer"></div></label>
            </section>
        )
    }

}

export default PhotoInput;