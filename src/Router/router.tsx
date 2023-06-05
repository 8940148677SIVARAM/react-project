import { BrowserRouter ,Route,Routes, useActionData } from "react-router-dom";
import Login from "../Login/Login";
import Game from "../Game/Game";
import Signup from "../signup/Signup";
import Home from "../Home/Home";
import { Provider, useSelector } from "react-redux";
import { facebook } from "../redux/store";
import M from "../Message/messager";
import Createpost from "../createpost/Createpost";
import Profile from "../profile/Profile";
function Router1(){
  let state=useSelector((state:any)=>state.facebook.islogin);
    return(
      <BrowserRouter>
      {state? 
             (<Routes>
                 <Route path="/game" element={<Game/>}></Route>
                 <Route path="/" element={<Home/>}></Route>
                 <Route path="/message" element={<M/>}></Route>
                 <Route path="*" element={<Home/>}></Route>
                 <Route path="/post"element={<Createpost/>}></Route>
                 <Route path="/profile"element={<Profile/>}></Route>
                 <Route path="/login" element={<Login/>}></Route>
             </Routes>)
            :
            (<Routes>
                 <Route path="/" element={<Login/>}></Route>
                 <Route path="/game" element={<Game/>}></Route>
                 <Route path="/signup" element={<Signup/>}></Route>
                 <Route path="*" element={<Login/>}></Route>
             </Routes>)
    }        
      </BrowserRouter>
    )
}
function Front(){
  return <Provider store={facebook}>
  <Router1/>
</Provider>
}
export default Front;