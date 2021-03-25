import React from 'react';
import Navbar from './navbar'
import About from'./about'
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      componentDidMount(){
            let header = document.getElementById("navbar");
            let sticky = header.offsetTop; 
            window.onscroll = function(){
                  if(window.pageYOffset > sticky)header.classList.add("sticky")
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
                        {/* <About/> */}
                        <div id ='red'>
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
                  </div>
            )
      }
}