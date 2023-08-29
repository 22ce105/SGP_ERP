import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import twitter from "../assets/twitter.png";
import fb from "../assets/facebook.png";
import insta from "../assets/insta.png";


function About() {
  return (
  <div className="allpage flex gap-4 p-3">
    <Link className="text" to="//in.linkedin.com/">
      <img src={linkedin} alt="linkdin" className="rounded-full w-10 h-10"/>
    </Link>
    <Link className="text" to="https://www.github.com/">
      <img src={github} alt="github" className="rounded-full w-10 h-10"/>
    </Link>
    <Link className="text" to="https://mail.google.com/">
      <img src={gmail} alt="gmail" className="rounded-full w-10 h-10"/>
    </Link>
    <Link className="text" to="https://twitter.com/">
      <img src={twitter} alt="twitter" className="rounded-full w-10 h-10"/>
    </Link>
    <Link className="text" to="https://www.facebook.com/">
      <img src={fb} alt="fb" className="rounded-full w-10 h-10"/>
    </Link>
    <Link className="text" to="https://www.instagram.com/">
      <img src={insta} alt="insta" className="rounded-full w-10 h-10"/>
    </Link>
  </div>
  )
}

export default About;
