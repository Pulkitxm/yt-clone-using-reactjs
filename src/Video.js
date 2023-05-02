import './Video.css';

function Video(props) {
  return (
    <>
      <div className="full">
      <a href={"https://youtu.be/" + props.url}>
        <div className="Video">
          <img src={"https://i.ytimg.com/vi/" + props.url + "/mqdefault.jpg"} alt="" />
        </div>
        <div className="text">
          <img draggable={false} src={"https://yt3.googleusercontent.com/U6xO0wNhImnY0R9ARogVhB2PCD4dAxggowdaw-bdu3cc6qyRPASV1Y-DmsR9pXaKeEy5WHIA=s176-c-k-c0x00ffffff-no-rj"} className="Pulkit" alt="Pulkit" />
          {props.text} 
        </div>
      </a>
      </div>
    </>
  );
}

export default Video;