import React from 'react'
import {Link} from 'react-scroll'
export default class navbar extends React.Component{
      render(){
            return (
                  <ul id = 'navbarUl' >
                        <li className = 'navLi'><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li className = 'navLi'><Link  to="about" spy={true} smooth={true}>About</Link></li>
                        <li className = 'navLi'><Link  to="project" spy={true} smooth={true}>Projects</Link></li>
                        <li className = 'navLi' ><Link  to="resume" spy={true} smooth={true}>Resume</Link></li>
                        <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
                  </ul>
            )
      }
}