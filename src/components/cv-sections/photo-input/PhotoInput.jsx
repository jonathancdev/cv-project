import React, { Component, createRef } from 'react';
import './PhotoInput.css';

class PhotoInput extends Component {
    constructor(props) {
        super(props)
        this.getFileName = this.getFileName.bind(this);
        this.storeFile = this.storeFile.bind(this);
        this.onChange = this.onChange.bind(this);
        this.fileDisplay = createRef();
        this.fileInput = createRef();
    }
    setImageStorage() {

    }
    storeFile(e) {
        console.log(e.target.files)
        const files = e.target.files;
        const reader = new FileReader();
        reader.onload = r => {
            localStorage.setItem('image', r.target.result)
        }
        reader.readAsDataURL(files[0]);
    }
     getFileName() {
        console.log(this.props.fileName)
         const path = this.fileInput.current.files[0].name;
         this.fileDisplay.current.value = path;
         this.props.update(path)
     }
     onChange(e) {
        this.storeFile(e);
        this.getFileName();
     }
    render() {
        return(
            <section>
                <input className="rect-std" placeholder="click here to browse files" disabled ref={this.fileDisplay}></input>
                <input onChange={this.onChange} id="browse-btn" type="file" hidden ref={this.fileInput}></input>
                <label htmlFor="browse-btn" id="btn-lbl"><div id="btn-layer"></div></label>
                <button className="upload-btn">upload</button>
            </section>
        )
    }

}

export default PhotoInput;