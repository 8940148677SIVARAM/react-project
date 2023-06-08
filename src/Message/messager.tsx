import "./message.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ton } from "../redux/SliceState";
import { useDispatch } from "react-redux";
import {AccountCircle} from "@mui/icons-material"
import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";
function M() {
     const navicate=useNavigate();
     const [ok, siva] = useState(false);
     const [type, changetype] = useState("");
     const [email, changeemail] = useState("");
     const dispatch = useDispatch();
     const friends = useSelector((state: any) => state.facebook.friend.filter((e: any) => e.user === state.facebook.loginuser.email));
     const name = useSelector((state: any) => state.facebook.loginuser.email);
     const m = useSelector((state: any) => state.facebook.message);
     const [mess, change] = useState(m);
     useEffect(() => {
          change(m);
     }, [m])
     console.log(friends)
     const typeing = (e: any) => {
          changetype(e.target.value);
          console.log(mess);
     }
     const send = (e:any) => {
          e.preventDefault();
          if (type !== "") {
               let chat = {
                    name: name,
                    a: type,
                    opp: email,
               }
               dispatch(ton(chat));
               changetype("");
               change(m);
          }
          else {
               alert("any think to type");
               change(m);
          }
     }
     const start = (e: any) => {
          changeemail(e);
          siva(true);
     }
     return (
          <>
               <section className="message">
                    <div className="firends-list">
                         <h1>Friends <button onClick={()=>navicate("/home")}>back to home</button></h1>
                         <div className="first">
                              {friends.map((e: any) => <><h1 style={{cursor:"pointer"}} onClick={() => start(e.email)}> {e.img ? <img src={e.img}></img> : <AccountCircle />}{e.name} <a href="#first">h</a></h1></>)}
                         </div>
                    </div>
                    <div className={ok ? "d-none" : "st"}>
                         <h1 className="s">
                              click your friends name start your conversation
                         </h1>
                    </div>
                    <div className={ok ? "conversation" : "d-none"}>
                         <h1>Messager</h1>
                         <div className="m">
                              {mess.filter((e: any) => e.name === name).filter((e: any) => e.opp === email).map((e: any) => <><p><span>you</span>{e.a}</p></>)}
                              <div id="last">   
                              </div>
                         </div>
                         <div className="e">
                              {mess.filter((e: any) => e.opp === name).filter((e: any) => e.name === email).map((e: any) => <><p><span>{friends.find((e: any) => e.email === email).name}</span>{e.a}</p></>)}
                              <div id="first" style={{height:"40px",width:"100%",transform:"translate(16px,-200px)"}}></div>
                         </div>
                         <form onSubmit={send}>
                         <input type="text" onChange={typeing} value={type}></input>
                         <button style={{cursor:"pointer"}}  type="submit"><SendIcon></SendIcon><a href="#last">click</a></button>
                         </form>
                    </div>
               </section>
          </>
     )
}
export default M;