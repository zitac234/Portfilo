import React from 'react';
import Navbar from './navbar'
import About from'./about'
import Project from'./project'
import Project from'./project'
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      componentDidMount(){
            let header = document.getElementById("navbar");
            let sticky = header.offsetTop; 
            window.onscroll = function(){
                  if(window.pageYOffset >= sticky)header.classList.add("sticky")
                  else header.classList.remove("sticky")
            }
      }
      componentWillUnmount() {
            window.removeEventListener("scroll");
      }
      background(){
            return ( 
                  <div>
                        <div className = 'context'>
                              <h2>Welcome, I'm <span>Nneoma Chukwukelu</span> a Software Engineer. </h2>
                        </div>
                        <div className = 'area'>
                              <ul className="circles">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                              </ul>
                        </div>
                  </div>
            )
      }
      render()
      {
            return(
                  <div >
                        <div className="parallax">{this.background()}</div>
                        <div id="navbar" className = 'nav'><Navbar/></div>
                        <div id='about'><About/></div>
                        <div id ='project'><Project/></div>
                        <div id ='resume'>
                              Scroll Up and Down this page to see the parallax scrolling effect.
                        </div>
                  </div>
            )
      }
}