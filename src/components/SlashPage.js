import React from "react";
import logo from '../ezgif.com-gif-to-mp4.mp4';

export default function SplashPage(props) {
  return (
    <>

      <div id="bg">
        <video controls="" autoplay="" loop="" class="myVideo"><source src={logo} type="video/mp4" />
        </video>
      </div>

    </>
  )
}