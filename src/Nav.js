import logo from './assets/icons/yt.svg';
import   './Nav.css';
import yt from "./assets/icons/yt.svg";
import ham from "./assets/icons/hamburger.svg";
import mic from "./assets/icons/mic.svg";
import cam from "./assets/icons/cam.svg";
import bell from "./assets/icons/bell.svg";
import Pulkit from "./assets/Pulkit.jpg";

function Nav() {
  return (
    <>
       <div className="nav">
        <img draggable={false}  src={ham} className="ham"  alt="menu"/>
        <img draggable={false}  src={yt} className="yt" alt="yt" />
        <div className="text">YouTube</div>
        <div className="search">
            <input type="text" className="inp"  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;Search"/>
            <img draggable={false} src={mic} className="mic" alt="mic"/> 
        </div>
        <img draggable={false} src={cam} className="cam" alt="cam"/> 
        <img draggable={false} src={bell} className="bell" alt="bell"/> 
        <img draggable={false} src={Pulkit} className="Pulkit" alt="Pulkit"/> 
    </div>
    </>
  );
}

export default Nav;
