import './Signup.scss'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signuppage } from '../redux/SliceState';
const Signup = (props:any) => {
    let dispatch=useDispatch();
   let month=["January","February","March","April","May","June","July","August","september","October","November","December"];
    let year:any=[];
    let date=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    for(let i=0;i<=50;++i){
        let date=new Date();
        let years:number=date.getFullYear();
        year.push(years-i);
    }
    let user:any=useSelector((state:any)=>state.facebook.users);
    const navigate:any=useNavigate();
    const [name,changename]=useState("");
    const [sname,changesname]=useState("");
    const [email,changeemail]=useState("");
    const [pass,changepass]=useState("");
    const [bday,changeday]=useState("");
    const [bmonth,changemonth]=useState("");
    const[byear,changeyear]=useState("");
    const[Gender,changegender]=useState("");
    const[n,na]=useState(false);
    const[s,sna]=useState(false);
    const[e,em]=useState(false);
    const[p,pa]=useState(false);
  const signup=(e:any)=>{
      switch(e.target.name){
           case "fname":
           changename(e.target.value);
           na(false);
           break;
           case "sname":
           changesname(e.target.value);
           sna(false);
           break;
           case "email":
           changeemail(e.target.value);
           em(false);
           break;
           case "pass":
           changepass(e.target.value);
           pa(false);
           break;
           case "bday":
           changeday(e.target.value);
           break;
           case "bmonth":
           changemonth(e.target.value);
           break;
           case "byear":
           changeyear(e.target.value);
           break;
           case "gender":
           changegender(e.target.value);
           break;
      }
  }
const sub=(e:any)=>{
  e.preventDefault();
  let s:any={
    name:name,
    sname:sname,
    email:email,
    password:pass,
    day:bday,
    month:bmonth,
    year:byear,
    gender:Gender,
    }
   if(name==="" && sname==="" && email==="" && pass===""){
     alert("please fill the box");
   }
   else if(name===""){
     na(true);
   }
   else if(sname===""){
     sna(true);
   }
   else if(email===""){
     em(true);
   }
   else if(pass===""){
    pa(true);
   }
   else if(bday===""){
     alert("ender the valid birthday");
   }
   else if(user.some((e:any)=>e.email===email)){
    alert("email has already login")
   }
   else{
    navigate("/");
    dispatch(signuppage(s));
   }
}
return (
<div className='container'>
    <form onSubmit={sub}>
   <section id='login-page'>
           <div className='form'>
                <div className={Array.isArray(props.close)?"d-none":"head"}>
                    <div>
                        <h1>Sign Up</h1>
                         <p>It's quick and easy</p>
                    </div>
                </div>
                <hr/>
                <div className='row just'>
                        <div className={n?"border col-6":" col-6"}>
                            <div className='name'>
                                <TextField id="outlined-basic" label="First name" variant="outlined" name='fname' value={name} onChange={signup} />
                            </div>
                        </div>
                        <div className={s?"border col-6":"col-6"}>
                            <div className='name'>
                                <TextField id="outlined-basic" label="Surname" variant="outlined" name='sname' value={sname}  onChange={signup} />
                            </div>
                        </div>
                </div>
                <div className='row'>
                    <div className={e?"border col-12":" col-12"}>
                    <TextField id="outlined-basic" label="email address" type="email" variant="outlined" name='email' value={email} onChange={signup} />
                    </div>
                </div>
                <div className='row'>
                    <div className={p?"border col-12":"col-12"}>
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" name='pass' value={pass} onChange={signup} />
                    </div>
                </div>
                <p>Date of birth</p>
                <div className='row just'>
                   <div className='col-4'>
                        <select name="bday" id="date" onChange={signup} required>
                            {
                                date.map((e:number)=><option value={e}>{e}</option>)
                            }
                        </select>
                    </div>
                    <div className='col-4'>
                    <select name="bmonth" id="date" onChange={signup} required>
                            {
                                month.map((e:string)=><option value={e}>{e}</option>)
                            }
                    </select>
                    </div>
                    <div className='col-4'>
                    <select name="byear" id="date" onChange={signup} required>
                            {
                                year.map((e:string)=><option value={e}>{e}</option>)
                            }
                    </select>
                    </div>
                </div>
                <p>Gender</p>
                <div className='row just'>
                    <div className='col-4'>
                    <div className="boy">
                            <label>Boy</label><input type="radio" value="Male" name="gender" id="c" onChange={signup} required ></input>
                        </div>
                    </div>
                    <div className='col-4'>
                    <div className="boy">
                            <label>Girl</label><input type="radio" value="Female" name="gender" id="c" onChange={signup} required></input>
                        </div>
                    </div>
                    <div className='col-4'>
                    <div className="boy">
                            <label>Custom</label><input type="radio" value="Custom" name="gender" id="c" onChange={signup} required></input>
                        </div>
                    </div>
                </div>
                    <p>People who use our service may have uploaded your contact information to Facebook. Learn more.<br></br>

                    clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.</p>
                    <div className='row justtwo'>
                        <button type='submit'>Sing Up</button>
                    </div>
                </div>
                </section>
                </form>
        </div>
  )
}

export default Signup