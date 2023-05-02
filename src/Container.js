import React from 'react';
import ReactDOM from 'react-dom/client';
import './container.css';
import App from './App';
import Nav from './Nav';
import Slidebar from './Slidebar';
import Video from './Video';

function Container() {
    return (
      <>
        <div className="items">
            <Slidebar/>
            <div>
              <Video url = 'dwWZmRJ8jTw' text = 'Video 1  |  CodeWithPulkit' />
              <Video url = 'RNLmIHvBb8A' text = 'Video 4 |  CodeWithPulkit' />
              <Video url = 'ZVB_Xk514S0' text = 'Video 7 |  CodeWithPulkit' />
            </div>
            <div>
            <Video url = 'tVPayd0j8Dg' text = 'Video 2 |  CodeWithPulkit' />
              <Video url = 'xauoe6MrCQs' text = 'Video 5  |  CodeWithPulkit' />
              <Video url = 'FydO3bwFnqU' text = 'Video 8  |  CodeWithPulkit' />
            </div>
            <div>
              <Video url = 'j_HFROMIqww' text = 'Video 3  |  CodeWithPulkit' />
              <Video url = 'dwWZmRJ8jTw' text = 'Video 6 |  CodeWithPulkit' />
              <Video url = 'lY6YtVYPBu4' text = 'Video 9  |  CodeWithPulkit' />
            </div>
            {/* <Main-Part/>  */}
        </div>
      </>
    );
  }

  
export default Container;