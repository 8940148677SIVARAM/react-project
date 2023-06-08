import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Nav from "../navbar/Nav";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import img5 from "./img5.png";
import img6 from "./img6.png";
import img7 from "./img7.png";
import img8 from "./img8.png";
import img9 from "./img9.png";
import img10 from "./img10.png";
import myimg from "./rajesh1.jpg";
import Card from "@mui/material/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Group as GroupIcon,
  LockClock as LockClockIcon,
  Diversity3 as Diversity3Icon,
  AddToQueue as AddToQueueIcon,
  LocalActivity as LocalActivityIcon,
  Grade as GradeIcon,
  AutoStories as AutoStoriesIcon,
  Theaters as TheatersIcon,
  Memory as MemoryIcon,
  Storefront as StorefrontIcon,
  BookmarkAdd as BookmarkAddIcon,
  Layers as LayersIcon,
  Duo as DuoIcon,
  AddAPhoto as AddAPhotoIcon,
  TagFaces as TagFacesIcon,
  ThumbUpOffAlt as ThumbUpOffAltIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Send as SendIcon,
  AccountCircle,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import "./home.scss";
import { useDispatch } from "react-redux";
import { yesfriends,like,commentex } from "../redux/SliceState";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  let use=useSelector((state:any)=>state.facebook.users);
  let friend = useSelector((state: any) => state.facebook.users.filter((e: any) => e.email !== state.facebook.loginuser.email));
  let dispatch = useDispatch();
  let check = useSelector((state: any) => state.facebook.friend);
  let user:any = useSelector((state: any) => state.facebook.loginuser);
  let post=useSelector((state:any)=> state.facebook.posts);
  const [poster,changepost]=useState(post);
  const [commenttrue,oncomment]=useState(true);
  const [message,yes]=useState("")
  const create=(e:any)=>{
     yes(e.target.value);
  }
  useEffect(()=>{
    changepost(post)
 },[post])
  const addfriends = (e: any,h :any) => {
    let yes:boolean = check.filter((e:any)=>e.user===user.email).some((a:any) => a.opp === e);
    let image:any=use.find((a:any)=>a.email===e);

    if (!yes) {
      let ship = {
        user: user.email,
        email: e,
        opp: e,
        name:h,
        img:image.img,
      }
      dispatch(yesfriends(ship));
    }
    else {
      alert("already your friend")
    }
  }
  var settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <section id="home-section">
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <div className="col-3 col-xs-12">
            <div className="left-bar">
              <ul>
                <li style={{cursor:"pointer"}}>
                  <div className="row align-items">
                    <div className="col-2">
                      <img src={img1}></img>
                    </div>
                    <div className="col-10" onClick={() => navigate("/message")}>Friends</div>
                  </div>
                </li>
                <li style={{cursor:"pointer"}} onClick={()=>navigate("/profile")}>
                  <div className="row align-items">
                    <div className="col-2">
                      <img src={img3}></img>
                    </div>
                    <div className="col-10">profile</div>
                  </div>
                </li>
                <li style={{cursor:"pointer"}} onClick={()=>navigate("/post")}>
                  <div className="row align-items">
                    <div className="col-2">
                      <img src={img5}></img>
                    </div>
                    <div className="col-10">CREATE POST</div>
                  </div>
                </li>
                <li style={{cursor:"pointer"}} onClick={()=>navigate("/game")}>
                  <div className="row align-items">
                    <div className="col-2">
                      <img src={img9}></img>
                    </div>
                    <div className="col-10">GAME</div>
                  </div>
                </li>
                <li >
                  <div className="row align-items">
                    <div className="col-2" style={{color:"green",width:"100%"}}>
                       post images only
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-xs-12">
            <div className="main-bar">
              <div className="main-box">
                <div className="row">
                  <div className="col-6 col-xs-6 story-reals active">
                    <span>
                      {" "}
                      <AutoStoriesIcon></AutoStoriesIcon>Stories
                    </span>
                  </div>
                  <div className="col-6  col-xs-6 story-reals">
                    <span>
                      {" "}
                      <TheatersIcon></TheatersIcon> Reels
                    </span>
                  </div>
                  <Slider {...settings} autoplay>

                    <div className="col-3 col-xs-6 scroll-story">
                      <div>
                        <video src="https://youtube.com/shorts/mhEnb83Q_6U?feature=share" controls muted loop poster="https://static.toiimg.com/thumb/64918443.cms?width=170&height=240&imgsize=76448" height='100%' width='100%'></video>
                      </div>
                    </div>
                    <div className="col-3 col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/MAa_8XwAVlA" controls muted loop poster="https://i0.wp.com/lamocom.in/wp-content/uploads/2023/04/viduthalai-2.jpg?fit=220%2C284&ssl=1" height='100%' width='100%'></video>

                      </div>
                    </div>
                    <div className="col-3 col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/82E3iLz2y-M" controls muted loop poster="https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg" height='100%' width='100%'></video>
                      </div>
                    </div>
                    <div className="col-3 col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/nWxGhq_lBII" controls muted loop poster="https://c.saavncdn.com/960/Madharasapattinam-Tamil-2010-20200627073521-500x500.jpg" height='100%' width='100%'></video>

                      </div>
                    </div>
                    <div className="col-3 col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/592mNGkpYig" controls muted loop poster="https://chennaionline.com/wp-content/uploads/2023/02/Vathi-Movie-Stills-2.jpg" height='100%' width='100%'></video>

                      </div>
                    </div>
                    <div className="col-3 col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/zKBY8iffWl0" controls muted loop poster="data:image/jpeg;base64,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" height='100%' width='100%'></video>

                      </div>
                    </div>
                    <div className="col-3  col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/Y4S20QLPyH0" controls muted loop poster="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBlcniqbpuhEq4AxCgPipTMlr-NwABAazq_N49XQhWplgbl5jQBXr9iUm9aNPfMU6cpvn5zNz-ctQZEOk4FBr9btH3H9Nzl-QsweO4TfXo-HvEV_pFpX8_4aEMpqULmoTg1wO4NnQcV8Ek25jkLMRMiXI9nUk0n9m2WuN9_SGyls07LepJX5FOrKT2Bg/s600/Ponniyin-Selvan-2-PS-2-Movie-Star-Cast-Crew-Wiki.jpg" height='100%' width='100%'></video>

                      </div>
                    </div>
                    <div className="col-3  col-xs-6  scroll-story">
                      <div>
                        <video src="https://youtu.be/MJmxdlCtFWU" controls muted loop poster="https://www.deccanherald.com/sites/dh/files/articleimages/2022/04/29/krk-1104983-1651231905.jpg" height='100%' width='100%'></video>

                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="chat-box">
              <div className="row">
                <div className="col-2">
                  <div className="typing-img">
                    <img src={user.img} alt="upload-img"></img>
                  </div>
                </div>
                <div className="col-10">
                  <div className="typing-box">
                    <p>What's on your mind,</p>
                  </div>
                </div>
                <div className="upload-items">
                  <div className="row">
                    <div className="col-4 upload-icon">
                      <span onClick={()=>navigate("/post")}>
                        <DuoIcon className="video-icon"></DuoIcon>Live Video
                      </span>
                    </div>
                    <div className="col-4 upload-icon" style={{cursor:"pointer"}}>
                      <span onClick={()=>navigate("/post")}>
                        <AddAPhotoIcon className="photo-icon"></AddAPhotoIcon>
                        Photo/video
                      </span>
                    </div>
                    <div className="col-4 upload-icon">
                      <span onClick={()=>navigate("/post")}>
                        <TagFacesIcon className="moij-icon"></TagFacesIcon>
                        Feeling/activity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-card">
              <div className="row">
                {poster.map((e:any,i:any)=><div className="col-12" style={{marginBottom:"20px"}}>
                  <Card sx={{ Width: 100 }}>
                    <div>
                      <h1>{e.img ? <img src={e.img}></img> : <AccountCircle />}{e.name}</h1>
                    </div>
                    <img width="100%" src={e.postimg}></img>
                    <p style={{textAlign:"center",fontFamily:"cursive",fontSize:"20px",color:"black",border:"2px solid gray",borderRadius:"25px"}}>{e.posttext}</p>
                    <div className="viewlike">
                     <small>liked by {e.like[0]?e.like[0]:"on one"} and  {e.like.length===0?"No":e.like.length-1} other people's</small>
                    </div>
                    <div className="card-share">
                      <div className="row">
                        <div className="col-6 view-icon" onClick={()=>{
                          dispatch(like(i));
                          changepost(post);
                        }}>
                          <span className={e.like.some((e:any)=>e==user.email)?"like":""}>
                            <ThumbUpOffAltIcon></ThumbUpOffAltIcon>Like
                          </span>
                        </div>
                        <div className="col-6 view-icon" onClick={()=>oncomment(!commenttrue)}>
                          <span>
                            <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                            Comment
                          </span>
                        </div>
                      </div>
                      <div className={commenttrue?"moji-input d-none":"moji-input"}>
                           {e.Comment.map((e:any)=><> <div className="comment"><img src={e.img} alt="change"></img><h1>{e.name}</h1><p>{e.message}</p></div></>)}
                        <div className="row align-items">
                          <div className="col-02">
                            <img src={img1}></img>
                          </div>
                          <div className="col-10 row">
                            <input type="text" onChange={create} value={message}></input>
                            <button type="button" onClick={()=>{if(message!==""){dispatch(commentex([i,message]));
                          changepost(post);
                          yes("");
                          } else{alert("please ender the comment")}}}><SendIcon></SendIcon></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-3 col-xs-12">
            <div className="right-bar">
              <ul>
                {friend.map((e: any) => <><li> {e.img ? <img src={e.img}></img> : <AccountCircle />}{e.name}<button onClick={() => addfriends(e.email,e.name)}>ADDFRIEND</button></li></>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
