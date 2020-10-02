import React from 'react';
import '../css/create.css'
import * as FcIcons from 'react-icons/fc'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'
import axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class createPost extends React.Component {
    
    state = {
        title : '' ,
        tags : '' ,
        body : '',
        username : this.props.state.username ,
        selectedFile : null ,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); 
        let words = this.state.body.split(" ");
        let tag = '';
        words.map(word => {
            if(word[0] === '#') tag = tag +  word + " ";
        })
        const data = {
            title : this.state.title ,
            tags : tag , 
            body : this.state.body ,
            username : this.state.username ,
        }
        console.log(data);
        axios.post('http://localhost:8000/post/create' , data).then(res => {
            console.log(res);
            this.props.history.push('/');
        }).catch(e => {
            console.log("error");
        })
    }
    fileSelectedHandler = event => {
        
        const file = {
            selectedFile : event.target.files[0]
        }
        
        const fd = new FormData();
        fd.append('image' ,file.selectedFile ,file.selectedFile.name);

        // axios.post('' , fd , {
        //     onUploadProgress : ProgressEvent => {
        //         console.log('Upload Progress : ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
        //     }
        // }).then( res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log('Error While Uploading');
        // })
    }
    
    render() {
        return(
            <>
                <div className = "post"> 
                <form onSubmit = {this.handleSubmit} className = "form">
                    <label className = "title">Title</label>
                    <input onChange = {this.handleChange} type = "text" name = "title" autoComplete = "off" />
                    <label className = "title" >Write Something !</label>
                    <CKEditor
                    editor={ ClassicEditor }
                    data = ""
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    }}
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState({body : data});
                    } }
                    />
                    <div className = "icons">
                        <input style = {{display : "none"}} type = "file" onChange = {this.fileSelectedHandler}
                         ref = {fileInput => this.fileInput = fileInput}/>
                        <FcIcons.FcPicture className = "largeicon" onClick = {() => this.fileInput.click()}/>
                        <AiIcons.AiFillGithub className = "largeicon"/>
                        <GrIcons.GrAttachment className = "largeicon"/>
                    </div>
                    <button className = "waves-effect waves-light btn" style = {{float : "right"}} type = "submit" ><FaIcons.FaLocationArrow style = {{color : "blue"}}/></button>
                </form>
                </div>               
            </>
        )
    }
};
export default createPost;
