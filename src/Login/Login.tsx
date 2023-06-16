import { Button } from '@mui/material';
import './Login.scss';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch, useSelector } from 'react-redux';
import { loginpage, userLogin } from '../redux/SliceState';
function Login() {
  let en: any = {
    title: "Facebook helps you connect and share with the people in your life.", place1: "Email address or phone number", place2: "Password",
    log: "LOG  IN", pass: "Forgotten password?", btn: "Create new account", p1: " Create a Page ", p2: "for a celebrity, brand or business."
  };
  let tam: any = {
    title: "Facebook சக மனிதர்களுடன் நல்லுறவு அமைத்துக்கொள்ள உதவுகிறது.", place1: "மின்னஞ்சல் அல்லது மொபைல்", place2: "கடவுச்சொல்",
    log: "உள்நுழைக", pass: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?", btn: "புதிய கணக்கை உருவாக்கு", p1: "பக்கத்தை உருவாக்கவும்", p2: "பிரபலம், பிராண்ட் அல்லது வணிகத்திற்காக..."
  };
  let lang1: any = {
    title: "Facebookలో వ్యక్తులు బంధాలను కలుపుకోవచ్చు మరియు సుఖదుఃఖాలను మిత్రులతో పంచుకోవచ్చు.", place1: "ఇమెయిల్ లేదా ఫోన్ నెంబరు", place2: "పాస్‌వర్డ్",
    log: "లాగిన్ చేయి", pass: "పాస్‌వర్డ్‌ని మర్చిపోయారా?", btn: "కొత్త ఖాతాని సృష్టించండి", p1: " పేజీని సృష్టించండి", p2: "సెలిబ్రిటీ, బ్యాండ్ లేదా వ్యాపార సంస్థ కోసం."
  };
  let lang2: any = {
    title: "ನಿಮ್ಮ ಜೀವನದಲ್ಲಿ ಜನರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಲು ಮತ್ತು ಹಂಚಿಕೊಳ್ಳಲು Facebook ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.", place1: "ಇಮೇಲ್ ಅಥವಾ ಫೋನ್ ಸಂಖ್ಯೆ", place2: "ಪಾಸ್‌ವರ್ಡ್",
    log: "ಲಾಗ್ ಇನ್", pass: "ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರುವಿರಾ?", btn: "ಹೊಸ ಖಾತೆಯನ್ನು ರಚಿಸಿ", p1: " ಪುಟ ರಚಿಸಿ", p2: "ಪ್ರಸಿದ್ಧ ವ್ಯಕ್ತಿ, ಬ್ರ್ಯಾಂಡ್ ಅಥವಾ ವ್ಯಾಪಾರಕ್ಕಾಗಿ. "
  };
  let lang3: any = {
    title: "Facebook लोगों से जुड़ने और शेयर करने में आपकी मदद करता है.", place1: "ईमेल या फ़ोन नंबर", place2: "पासवर्ड",
    log: "लॉग इन करें", pass: "पासवर्ड भूल गए?", btn: "नया अकाउंट बनाएँ", p1: " एक पेज बनाएँ", p2: "किसी सेलिब्रिटी, ब्रांड या बिज़नेस के लिए"
  };
  let lang4: any = {
    title: "സുഹൃത്തുക്കൾക്കും പ്രിയപ്പെട്ടവർക്കുമൊപ്പം കണക്‌റ്റുചെയ്യുന്നതിനും പങ്കിടുന്നതിനും Facebook സഹായിക്കുന്നു.", place1: "ഇമെയിൽ അല്ലെങ്കിൽ ഫോൺ നമ്പർ", place2: "പാസ്‌വേഡ്",
    log: "ലോഗിൻ ചെയ്യുക", pass: "പാസ്‌വേഡ് മറന്നോ?", btn: "പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കുക", p1: "ഒരു പേജ് സൃഷ്‌ടിക്കുക", p2: "ഒരു പ്രശസ്‌ത വ്യക്തിയ്‌ക്കോ ബ്രാൻഡീനോ ബിസിനസ്സിനോ വേണ്ടി "
  };
  let lang5: any = {
    title: "ඔබේ දිවියෙහි පුද්ගලයින් සමඟ සම්බන්ධ වී ඔවුන් සමඟ බෙදා හදා ගැනීමට Facebook ඔබට උදවු කරයි.", place1: "ඊමේල් ලිපිනය හෝ දුරකථන අංකය", place2: "මුරපදය",
    log: "පිවිසෙන්න", pass: "මුරපදය අමතක වුණා ද?", btn: "නව ගිණුම තනන්න", p1: " පිටුවක් තනන්න", p2: "කීර්තිමත් පුද්ගලයන්, සන්නාම හෝ ව්‍යාපාර සඳහා"
  };
  let user: any = useSelector((state: any) => state.facebook.users);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [lang, changelang] = useState(en);
  const [email, changeemail] = useState("");
  const [pass, changepass] = useState("");
  const Email = (e: any) => {
    changeemail(e.target.value);
  }
  const password = (e: any) => {
    changepass(e.target.value);
  }
  const login = (e: any) => {
    e.preventDefault();
    let cuser = user.some((e: any) => e.email === email && e.password === pass);
    if (cuser) {
      let loginuser = user.find((e: any) => e.email === email);
      dispatch(loginpage(true));
      dispatch(userLogin(loginuser));
      navigate("/home");
    }
    else {
      alert("please chack the input")
    }
  }
  return (
    <>
      <section className='login-form' id="top">
        <div className='container'>
          <div className='flex'>
            <div className='Logo'>
              <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt='Facebook'></img>
              <p>{lang.title}</p>
            </div>
            <div className='Form' >
              <form onSubmit={login}>
                <OutlinedInput placeholder={lang.place1}
                  onChange={Email}
                  value={email}
                />
                <OutlinedInput placeholder={lang.place2}
                  onChange={password}
                  value={pass}
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      {pass !== "" ? <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton> : ""}
                    </InputAdornment>
                  }
                />
                <Button className='log' type='submit'>{lang.log}</Button>
                <Link to="/signup">{lang.pass}</Link>
                <div className='line'>
                </div>
              </form>
              <div className='sign'>
                <Button className='create' onClick={() => navigate("/signup")}>{lang.btn}</Button>
                <p><span><Link to={"/signup"}>{lang.p1}</Link></span>{lang.p2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='login-info'>
        <div className='container'>
          <div className='links'>
            <div className='lang'>
              <a href="#top" onClick={() => changelang(en)} title='English'>English</a>
              <a href="#top" onClick={() => changelang(tam)} title='Tamil'>தமிழ்</a>
              <a href="#top" onClick={() => changelang(lang1)} title='Telugu'>తెలుగు</a>
              <a href='#top' onClick={() => changelang(lang2)} title='Kannada'>ಕನ್ನಡ</a>
              <a href='#top' onClick={() => changelang(lang3)} title='Hindi'>हिन्दी</a>
              <a href='#top' onClick={() => changelang(lang4)} title='Malayalam'>മലയാളം</a>
              <a href='#top' onClick={() => changelang(lang5)} title='sinhala'>සිංහල</a>
            </div>
            <hr></hr>
            <div className='page'>
              <Link to={"/signup"}>signup</Link>
              <Link to={"/game"}>game</Link>
              <Link to={"/"}>Login</Link>
            </div>
            <div className='about'>
              <p>
                Facebook is a website which allows users, who sign-up for free profiles, to connect with friends, work colleagues or people they don't know, online. It allows users to share pictures, music, videos, and articles, as well as their own thoughts and opinions with however many people they like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Login;