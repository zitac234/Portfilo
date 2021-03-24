import React from 'react';
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      componentDidMount(){
            window.addEventListener('scroll', () => {
                  const topBorder = document.getElementById('navbar-container').getBoundingClientRect().top
            })
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
            return<div >{this.background()}</div>
      }
}