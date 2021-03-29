import React from 'react'

export default class project extends React.Component{
      constructor(props){
            super(props)
            this.capstone = this.capstone.bind(this)
      }
      capstone(){
            return (
                  <div id = 'capstone'>
                        <h3>Tamagenki</h3>
                        <div>

                        </div>
                        
                        <h6>Tech stacks</h6>
                              <p>
                                    React, Redux, JavaScript, Express.js, Sequelize, Haiku Animator, Lottie, React-Chart, Material-UI, Howler.js, PWA, PostgreSql
                              </p>
                        <button type='button' className='button'> Learn More </button>
                  <img className='projectImage' src='/image/capstone.png'/>
                        
                        <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Website</a>
                        <a href='https://github.com/2011-gravity0/tamagenki' className='linkButton'>Github</a>
                  </div>
            )
      }
      render(){
            return(
                  <div id = 'boxes'>
                        <h1>PROJECTS</h1>
                        {this.capstone()}
                  </div>
            )
      }
}