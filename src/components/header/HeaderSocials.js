import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiDribbble} from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import "./header.css"; 

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/hushahadat/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/hushahadat" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/shahadat.hussain.5602" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials