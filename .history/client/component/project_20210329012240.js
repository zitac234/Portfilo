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
                        <div className='description'>
                              <h6>Description</h6>
                              <p>
                                    Tamagenki is a pet accountability game that uses push notifications and checklists to help users implement health and mindfulness habits into their daily life. 
                              </p>
                        </div>
                        <div  className='tech'>
                              <h6>Tech stacks</h6>
                                    <ul>
                                          <li>Javascript</li>
                                          <li>React/Redux for Frontend</li>
                                          <li>Express.js for Backend</li>
                                          <li>Sequelize for database</li>
                                          <li>Haiku Animator and Lottie  for Animation</li>
                                           Express.js, Sequelize, Haiku Animator, Lottie, React-Chart, Material-UI, Howler.js, PWA, PostgreSql
                                    </ul>
                        </div>
                        

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