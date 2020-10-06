import React from "react";
import ScriptTag from 'react-script-tag';
import logo from '../ezgif.com-gif-to-mp4.mp4';


export default function SplashPage(props) {
  return (
    <>
    <div id="bg">
      <iframe id="iframe" src="https://player.vimeo.com/video/465498752?autoplay=1&loop=1&title=0&byline=0&portrait=0" width="2000" height="1000" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    
      {/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/465498752?autoplay=1&loop=1" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div> */}

      {/* <ScriptTag isHydrating={true} type="text/javascript" src="https://player.vimeo.com/api/player.js" /> */}
      {/* <div id="bg">
        <video controls="" autoplay="" loop="" class="myVideo"><source src={logo} type="video/mp4" />
        </video>
      </div> */}

    </>
  )
}