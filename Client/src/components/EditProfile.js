import React ,{ useState }from 'react';
import '../css/style.css';
import axios from 'axios';

const EditProfile =(props)=>{

    const [selectedFiles, setSelectedFiles] = useState({})
    const [uploadProg,setuploadProg] = useState([]);    
    
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        const formData = new FormData(); 
        console.log(e.target.profile.files[0]);
        
        formData.append('file',e.target.profile.files[0]);
        formData.append('filename',e.target.profile.files[0].name);
        formData.append('username',props.state.username);
        const url='post/editimage'
        
        
        axios.post(url,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            },
            onUploadProgress:ProgressEvent=>{
                setuploadProg(parseInt(Math.round(ProgressEvent.loaded*100)/ProgressEvent.total))
            setTimeout(()=>setuploadProg(0),10000);    
            }
        })
            .then(res=>{
                console.log(res.data);
            })
        

        }
    
    const handle=(e)=>{
        e.preventDefault();
        const url='post/update';
        var data={};

        if(e.target.password)
        {
            data={
                prev_username:props.state.username,
                username:null,
                password:e.target.password.value
            }
        }
        else
        {
            data={
                prev_username:props.state.username,
                username:e.target.username.value,
                password:null
            }
        }
        console.log(data);
        
        axios.post(url,data)
            .then(res=>{
                console.log(res.data);
                props.logout();
                props.history.push('/');
            })
    }

    
    return(
        <div>
        <div className="d-block justify-content-center align-items-center" style={{marginLeft:"41%",marginTop:"20px"}}>
            <div className="Image_wrap" style={{ width:"180px",height:"210px"}}>
                
                <img style={{marginBottom:"50px"}} className = "deepimage profile-img center" src ={require('../image/pp.png')} alt="Profile Image"/>
                <div className="upload" style={ {marginTop:"-200px",marginLeft:"75px"} }>
                
                <form onSubmit={handlesubmit}>
                    <input style={{marginLeft:"-20px"} } type="file" className="form-control" id="profile" required/>
                    <button type="submit" className="deep btn btn-success px-0 p-2" >
                        <h6>Update</h6>
                    </button>
                </form>
                
                </div>
            </div>     
        </div>    
        <div className="d-block justify-content-center align-items-center" style={{marginLeft:"36%",marginTop:"20px"}}>
            
            <div className="row">
                <div className="d-flex">
                    <label htmlFor="username" style={{marginTop:"30px",marginRight:"25px"}}>New Username</label>
                    <form onSubmit={handle}>
                    
                    <input type="text" className="form-control" id="username" required/>
                        <button type="submit" className="btn btn-success px-0 p-2" style={ {marginTop:"9px",marginLeft:"25px"} }>
                            <h6>Update</h6>
                        </button>
                    </form>    
                    </div>
            </div>
            
            <div className="row">
                <div className="d-flex">
                    <label htmlFor="username" style={{marginTop:"30px",marginRight:"25px"}}>New Password</label>
                    <form onSubmit={handle}>
                        <input type="password" className="form-control" id="password" required/>
                        <button type="submit" className="btn btn-success px-0 p-2" style={ {marginTop:"9px",marginLeft:"25px"} }>
                            <h6>Update</h6>
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
    
}

export default EditProfile;