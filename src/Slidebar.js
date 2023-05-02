import Home from '././assets/icons/Home.png'
import Explore from '././assets/icons/Explore.png'
import Shorts from '././assets/icons/Shorts.png'
import Subscription from '././assets/icons/subs.png'
import Library from '././assets/icons/library.png'
import History from '././assets/icons/history.png'
import Yvids from '././assets/icons/vids.png'
import Wlater from '././assets/icons/later.png'
import Like from '././assets/icons/like.png'
import Pulkit from "./assets/Pulkit.jpg";
import './Slidebar.css'

function Slidebar() {
  return (
    <>
      <div className="itm">
      <div className="element" id='active'>
        <img draggable={false} src={Home} alt="Home" /> Home
      </div>
      <div className="element">
        <img draggable={false} src={Explore} alt="Explore" /> Explore
      </div>
      <div className="element">
        <img draggable={false} src={Shorts} alt="Shorts" /> Youtube Shorts
      </div>
      <div className="element">
        <img draggable={false} src={Subscription} alt="Subscription" /> Subscription
      </div>
      <div className="element">
        <img draggable={false} src={Library} alt="Library" /> Library
      </div>
      <div className="element">
        <img draggable={false} src={History} alt="History" /> History
      </div>
      <div className="element">
        <img draggable={false} src={Yvids} alt="Yvids" /> Your vids
      </div>
      <div className="element">
        <img draggable={false} src={Wlater} alt="Wlater" /> Watch later
      </div>
      <div className="element">
        <img draggable={false} src={Like} alt="Like" /> Like
      </div>
      <hr />
      <div className="element">
        Subscriptions
      </div>
    <a href="https://www.youtube.com/@CodeWithPulkit">
    <div className="element">
        <img draggable={false} src={"https://yt3.googleusercontent.com/U6xO0wNhImnY0R9ARogVhB2PCD4dAxggowdaw-bdu3cc6qyRPASV1Y-DmsR9pXaKeEy5WHIA=s176-c-k-c0x00ffffff-no-rj"} className="Pulkit" alt="Pulkit" />
        CodeWithPulkit
      </div>
      <div className="element">
        <img draggable={false} src={"https://yt3.googleusercontent.com/U6xO0wNhImnY0R9ARogVhB2PCD4dAxggowdaw-bdu3cc6qyRPASV1Y-DmsR9pXaKeEy5WHIA=s176-c-k-c0x00ffffff-no-rj"} className="Pulkit" alt="Pulkit" />
        CodeWithPulkit
      </div>
      <div className="element">
        <img draggable={false} src={"https://yt3.googleusercontent.com/U6xO0wNhImnY0R9ARogVhB2PCD4dAxggowdaw-bdu3cc6qyRPASV1Y-DmsR9pXaKeEy5WHIA=s176-c-k-c0x00ffffff-no-rj"} className="Pulkit" alt="Pulkit" />
        CodeWithPulkit
      </div>
    </a>
      </div>
    </>
  );
}

export default Slidebar;
