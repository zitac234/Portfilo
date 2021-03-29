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
                        <div className='divLeft split'>
                              <h4>Description</h4>
                              <p>
                                    Tamagenki is a pet accountability game that uses push notifications and checklists to help users implement health and mindfulness habits into their daily life. 
                              </p>
                              <h4>Tech stacks</h4>
                                    <ul>
                                          <li>Javascript</li>
                                          <li>React/Redux</li>
                                          <li>Express.js</li>
                                          <li>Sequelize</li>
                                          <li>Haiku Animator and Lottie</li>
                                    </ul>
                        </div>
                        <div className='divRight split'>
                               <img className='projectImage' src='/image/capstone.png'/>
                               <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Website</a>
                              <a href='https://github.com/2011-gravity0/tamagenki' className='linkButton'>Github</a>
                        </div>
                  </div>
            )
      }
      render(){
            return(
                  <div>
                         <h1>PROJECTS</h1>
                        <div id = 'boxes'>
                              {this.capstone()}
                              <div id = 'graceshopper'><p>Nneoma Chukwukelu</p></div>
                        </div>
                  </div>
                  
            )
      }
}