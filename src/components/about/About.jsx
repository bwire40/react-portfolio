import React from 'react'
import ME from '../../assets/me.jpeg'
import './about.css'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {MdOutlineFolderSpecial} from 'react-icons/md'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about--container">
        <div className="about--me">
          <img src={ME} alt="me" className='about--me-image' />
        </div>
        <div className="about--content">
          <div className="about--cards">
            <article className="about--card">
              <BsAward className='about--icon'/>
              <h5>Experience</h5>
              <small>3+ working years</small>
            </article>
            <article className="about--card">
              <FiUsers className='about--icon'/>
              <h5>Clients</h5>
              <small>300+ clients worldwide</small>
            </article>
            <article className="about--card">
              <MdOutlineFolderSpecial className='about--icon'/>
              <h5>Projects</h5>
              <small>15+ projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices eu ante at tincidunt. Ut interdum eros eu diam mollis, id facilisis ipsum hendrerit. Quisque nec mauris dui. Nam pulvinar sem ut dignissim interdum. 
          </p>
            <a href="#contacts" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About