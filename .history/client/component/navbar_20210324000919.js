import React from 'react'
import {Link} from 'react-scroll'
export default class navbar extends React.Component{
      render(){
            return (
                  <ul id = 'navbarUL' >
                        <li className = ><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
                        <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
                        <li><Link  to="project" spy={true} smooth={true}>Projects</Link></li>
                        <li><Link  to="resume" spy={true} smooth={true}>Resume</Link></li>
                        <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
                  </ul>
            )
      }
}