import "./game.scss";
import { useState } from 'react';
import { Button } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import stone from"./stone.png"
let get: any = localStorage.getItem("score") || localStorage.getItem("initial");
let set: any = JSON.parse(get);
let scores: any = set;
let get1: any = localStorage.getItem("game") || localStorage.getItem("initial");
let set1: any = JSON.parse(get1);
let ids: any = set1;
function Game() {
      const [game, changegame] = useState(false);
      const [jump, changejump] = useState(false);
      const [name, changename] = useState("");
      const [pass, changepass] = useState("");
      const [gameover, chageover] = useState(false);
      const [start, chagestart] = useState(true);
      const [name1, changename1] = useState("");
      const [pass1, changepass1] = useState("");
      const action = () => {
            changejump(true);
            setTimeout(function () {
                  changejump(false);
            }, 500)
      }
      const guest = (e: any) => {
            changename(e.target.value);
      }
      const password = (e: any) => {
            changepass(e.target.value);
      }
      const guest1 = (e: any) => {
            changename1(e.target.value);
      }
      const password1 = (e: any) => {
            changepass1(e.target.value);
      }
      const create = () => {
            if (name === "" && pass === "") {
                  alert("fill the box");
            }
            else if (ids.some((e: any) => e.name === name)) {
                  alert("id is already booked");
            }
            else {
                  let s = {
                        name: name,
                        pass: pass,
                  }
                  ids.push(s);
                  localStorage.setItem("game", JSON.stringify(ids));
                  changename("");
                  changepass("");
            }
      }
      const on = () => {
            if (name1 === "" && pass1 === "") {
                  alert("fill the box");
            }
            else if (ids.some((e: any) => e.name === name1 && e.pass === pass1)) {
                  let now1 = Date.now();
                  changegame(true);
                  chagestart(false);
                  chageover(false);
                  let stop = setInterval(() => {
                        let animal: any = document.querySelector("#animal");
                        let top: any = window.getComputedStyle(animal).getPropertyValue("bottom");
                        if (parseInt(top) <= 100) {
                              let now2 = Date.now();
                              let points = now2 - now1;
                              alert("You loss");
                              chageover(true);
                              changegame(false);
                              let user = {
                                    name: name1,
                                    score: points,
                              }
                              scores.push(user);
                              localStorage.setItem("score", JSON.stringify(scores))
                              clearInterval(stop);
                        }
                  }, 1930);
            }
            else {
                  alert("id password is wrong");
            }
      }
      return (
            <>
                  <section className="overall" onClick={() => action()}>
                        <section className="score" style={{background:"black"}}>
                              <h1>Score list</h1>
                              <ul>
                                    {scores?.sort((a: any, b: any) => b.score - a.score).map((e: any, i: any) => <li><h2>{i + 1}</h2>Name:{e.name},score:{e.score}</li>)}
                              </ul>
                        </section>
                        <section className={start ? "start" : "d-none"}>
                              <h1>jump you can click </h1>
                              <hr></hr>
                              <div className="initial">
                                    <div>
                                          <h1>create iD</h1>
                                          <OutlinedInput placeholder="create id " onChange={guest} value={name} /><br></br>
                                          <OutlinedInput placeholder="create pass" onChange={password} value={pass} /><br></br>
                                          <Button variant="contained" color="success" onClick={() => create()}>
                                                create
                                          </Button>
                                    </div>
                                    <div>
                                          <h1>Login</h1>
                                          <OutlinedInput placeholder="enter the id" onChange={guest1} value={name1} /><br></br>
                                          <OutlinedInput placeholder="enter the pass" onChange={password1} value={pass1} /><br></br>
                                          <Button variant="contained" color="success" onClick={() => on()}>
                                                Start the game
                                          </Button>
                                    </div>
                              </div>
                        </section>
                        <section className={game ? "game" : "game d-none"} >
                              <div id="animal" className={jump ? "Animal" : ""}>
                                    <img src="https://i.pinimg.com/originals/a1/79/b5/a179b58b285b1f8baed84e9a10daea7e.gif" alt="tiger"></img>
                              </div>
                              <div id="animal1" className="Animal">
                                    <img src="https://i.pinimg.com/originals/f4/30/57/f4305767fe8cc6128a2628972b8f304c.gif" alt="zebra"></img>
                              </div>
                              <div id="block" className="Block">
                                    <img src={stone}alt="stone"></img>
                              </div>
                        </section>
                        <section className={gameover ? "start" : "d-none"}>
                              <h1>Jumb You Can Click Window</h1>
                              <div className="initial">
                                    <div>
                                          <h1>gameover your score on the score list</h1>
                                          <Button variant="contained" color="success" onClick={() => on()}>
                                                Start the game
                                          </Button>
                                    </div>
                              </div>
                        </section>
                  </section>
            </>
      )
}
export default Game;