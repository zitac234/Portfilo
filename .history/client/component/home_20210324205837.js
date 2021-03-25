import React from 'react';
import Navbar from './navbar'
import About from'./about'
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
            this.scrollBackground = this.scrollBackground.bind(this)
      }
      componentDidMount(){
            // window.addEventListener('scroll', () => {
            //       const topBorder = document.getElementById('navbar-container').getBoundingClientRect().top
            //       if(topBorder>=0)document.getElementById("navbar").classList.remove("fixed")
            //       else document.getElementById("navbar").classList.add("fixed")
            // })
            let header = document.getElementById("navbar");
            let sticky = header.offsetTop; 
            window.onscroll = function(){
     
                  if(window.pageYOffset > sticky)header.classList.add("sticky")
                  else header.classList.remove("sticky")
            }
      }
      scrollBackground(){

      }
      // componentWillUnmount() {
      //       window.removeEventListener("scroll");
      //     }
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
                        {this.background()}
                        <div id="navbar" className = 'nav'><Navbar/></div>
                        <About/>
                  </div>
            )
      }
}