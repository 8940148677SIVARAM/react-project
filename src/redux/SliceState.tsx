import { createSlice } from '@reduxjs/toolkit';
localStorage.setItem("initial", JSON.stringify([]));
let initial=localStorage.getItem("initial");
let f: any = localStorage.getItem("user") || initial;
let a = JSON.parse(f);
let c: any = localStorage.getItem("friends") || initial;
let e = JSON.parse(c);
let b: any = localStorage.getItem("message") || initial;
let o = JSON.parse(b);
let h:any=localStorage.getItem("posts") || initial;
let k=JSON.parse(h);
const initialstate: any = {
    users: a ,
    islogin: false,
    loginuser: {},
    friend: e ,
    message: o ,
    posts: k ,
}
const stateSlice = createSlice({
    name: "facebook",
    initialState: initialstate,
    reducers: {
        signuppage(state, action) {
            let sign = state.users;
            sign.push(action.payload);
            state.users = sign;
            localStorage.setItem("user", JSON.stringify(state.users));
        },
        loginpage(state, action) {
            state.islogin = action.payload;
        },
        userLogin(state, action) {
            state.loginuser = action.payload;
        },
        yesfriends(state, action) {
            let friend1: any = state.friend;
            friend1.push(action.payload);
            state.friend = friend1;
            localStorage.setItem("friends", JSON.stringify(state.friend));
        },
        ton(state, action) {
            let message = state.message;
            message.push(action.payload);
            state.message = message;
            localStorage.setItem("message", JSON.stringify(state.message));
        },
        changeuser(state,action){
            let user=state.loginuser.email;
            let index=state.users.findIndex((e:any)=>e.email===user);
            let use=state.users;
            use[index]=action.payload;
           localStorage.removeItem("user");
            localStorage.setItem("user", JSON.stringify(use));
            let frd=state.friend;
            let index1=state.friend.findIndex((e:any)=>e.opp===user);
            let h={...frd[index1],img:action.payload.img}
            frd[index1]=h;
            localStorage.removeItem("friends");
            localStorage.setItem("friends", JSON.stringify(frd));
        },
        post(state,action){
            let po=state.posts;
            po.push(action.payload);
            state.posts=po;
            localStorage.setItem("posts", JSON.stringify(state.posts));
        },
        like(state,action){
            let change=state.posts[action.payload];
            if(!change.like.some((e:any)=>e===state.loginuser.email)){
            change.like.unshift(state.loginuser.email);
            }
            else{
                let find=change.like.findIndex((e:any)=>e===state.loginuser.email);
               change.like.splice(find,1);
            }
             let change1=state.posts;
             change1[action.payload]=change;
             localStorage.setItem("posts", JSON.stringify(change1));
        },
        commentex(state,action){
            let ok=state.posts[action.payload[0]];
            let p={img:state.loginuser.img,message:action.payload[1],name:state.loginuser.name};
            ok.Comment.push(p);
            let change=state.posts;
            change[action.payload[0]]=ok;
            localStorage.setItem("posts", JSON.stringify(change));
        }
    }
})
export const { loginpage, signuppage, userLogin, yesfriends, ton ,changeuser ,post ,like ,commentex} = stateSlice.actions;
export default stateSlice.reducer;