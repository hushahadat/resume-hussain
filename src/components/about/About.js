import React from 'react';
import './about.css';
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import {TbFolders} from 'react-icons/tb'
import {MdCastForEducation} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h5>About Me</h5>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 + Years Working</small>
            </article>

            <article className="about_card">
              <TbFolders className='about_icon' />
              <h5>Projects</h5>
              <small>Worked In Multiple Projects</small>
            </article>

            <article className="about_card">
              <MdCastForEducation className='about_icon' />
              <h5>Education</h5>
              <small>BE in Computer Science</small>
            </article>

          </div>

          <p>
          A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About