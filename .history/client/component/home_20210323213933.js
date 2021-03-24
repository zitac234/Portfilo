import React from 'react';
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      componentDidMount(){
            window.addEventListener('scroll', () => {
                  const topBorder = document.getElementById('navbar-container').getBoundingClientRect().top
                  if(topBorder>=0)document.getElementById("navbar").classList.remove("fixed")
                  else document.getElementById("navbar").classList.add("fixed")
            })
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
                        <section id="navbar-container">
                        {this.background()}
                        
                              <nav id="navbar"> Hello World</nav>
                        </section>
                  </div>
            )
      }
}