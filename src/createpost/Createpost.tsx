import Home from '../Home/Home';
import React, { useState } from 'react';
import './createpost.scss';
import { Button, Card } from '@mui/material';
import { HighlightOff as HighlightOffIcon, } from '@mui/icons-material';
import imgphoto from './photo.png';
import imgmojo from './mojo.png';
import imggit from './git.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { post } from '../redux/SliceState';
const Createpost = () => {
    let use = useSelector((e: any) => e.facebook.loginuser);
    let dispatch = useDispatch();
    let navigate= useNavigate();
    const [text,changetext]=useState("");
    const [img,changeimg]=useState(use.img);
    const typeing=(e:any)=>{
     changetext(e.target.value);
    }
    const postfiles = (e: any) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
           changeimg(reader.result);
           
        })
        reader.readAsDataURL(e.target.files[0])
    }
    const sendpost=(e:any) => {
        e.preventDefault();
        console.log(true);
            let poster:any={...use,postimg:img,posttext:text,like:[],Comment:[]};
            dispatch(post(poster));
            navigate("/home");
    }
    return (
        <div>
            <section id='post-section'>
                <div className='post-back'>
                    <Home></Home>
                </div>
                <div>
                    <div className='post-card'>
                        <Card className='post'>
                            <h1>Create Post</h1>
                            <div className='post-close'>
                                <Link to='/home'><HighlightOffIcon ></HighlightOffIcon>  </Link>
                            </div>
                            <div className='post-man'>
                                <div className='man-img'>
                                    {use.img?<img src={use.img} alt='error'></img>:""}
                                </div>
                                <div className='man-name'>
                                    <h4>{use.name}</h4>
                                </div>
                            </div>
                            <div className='post-box'>
                                <input type='text' placeholder="Whats on your mind?" onChange={typeing} value={text}>

                                </input>
                            </div>
                            <div className='post-icon'>
                                <div>
                                    <p>Add to your Post</p>
                                </div>
                                <div className='post-img'>
                                    <Button className="upload"><img src={imgphoto} alt="next"></img>
                                    <input type="file" onChange={postfiles}></input>
                                    </Button>
                                    <Button className="upload"><img src={imgmojo} alt="next"></img>
                                    <input type="file" onChange={postfiles}></input>
                                    </Button>
                                    <Button className="upload"><img src={imggit} alt="next"></img>
                                    <input type="file" onChange={postfiles}></input>
                                    </Button>
                                </div>
                            </div>
                            <div className='post-btn'>
                                <form onSubmit={sendpost}>
                                <button type="submit">Post</button>
                                </form>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Createpost;



