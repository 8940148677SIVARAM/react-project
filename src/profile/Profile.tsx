import React, { useEffect, useState } from 'react';
import Home from "../Home/Home";
import './profile.scss';
import { Card } from '@mui/material';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { HighlightOff as HighlightOffIcon, Edit as EditIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeuser,userLogin } from '../redux/SliceState';
const Profile = () => {
    const user:any = useSelector((state: any) => state.facebook.loginuser);
    let dispatch=useDispatch();
    const [name, change] = useState(user.name);
    const [sname, changesname] = useState(user.sname);
    const [img,changeimg]=useState(user.img)
    const changename = (e: any) => {
        change(e.target.value);
    }
    const changes = (e: any) => {
        changesname(e.target.value);
    }
    const siva = (e: any) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            changeimg(reader.result);
        })
        reader.readAsDataURL(e.target.files[0])
    }
    
    const save = () => {
    let use={...user,img:img,name:name,sname:sname}
   dispatch(changeuser(use))
   dispatch(userLogin(use))
    }
    return (
        <section id='profile-section'>
            <div className='profile-back'>
                <Home></Home>
            </div>
            <div className='profile-card-postion'>
                <div className='profile-card'>
                    <Card className='profile'>
                        <form>
                            <div  className="head">
                                <h1>Create Profile</h1>
                                <img src={user.img} alt="upload" ></img>
                            </div>
                            <div className='profile-btn'>
                                <Link to='/home'>      <HighlightOffIcon ></HighlightOffIcon>  </Link>
                            </div>
                            <div className='profile-img'>
                                <div>
                                    <input type="file" id="img" onChange={siva}></input>
                                </div>
                            </div>
                            <div className='porfile-input'>
                                <div>
                                    <TextField id="standard-basic" label="Name" variant="standard" onChange={changename} value={name} />
                                </div>
                                <div>
                                    <TextField id="standard-basic" label="Nickname" variant="standard" onChange={changes} value={sname} />
                                </div>
                            </div>
                            <button type="button" onClick={() => save()}>Save</button>
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Profile
