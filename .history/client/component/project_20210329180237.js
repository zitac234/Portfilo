import React from 'react'

export default class project extends React.Component{
      constructor(props){
            super(props)
            this.capstone = this.capstone.bind(this)
            this.graceshopper = this.graceshopper.bind(this)
      }
      capstone(){
            return (
                  <div id = 'capstone'>
                        <h2 className='projectsHeader'>Tamagenki</h2>
                        <div className='divLeft'>
                              <h4 className='projectsHeader'>Description</h4>
                              <p>
                                    A pet accountability game that uses push notifications and checklists to help users implement health and mindfulness habits into their daily life. 
                              </p>
                              <h4 className='projectsHeader'>Tech stacks</h4>
                                    <ul>
                                          <li>Javascript</li>
                                          <li>React/Redux</li>
                                          <li>Express.js and Sequelize</li>
                                          <li>Haiku Animator and Lottie</li>
                                    </ul>
                                    <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Website</a>
                                    <a href='https://github.com/2011-gravity0/tamagenki' className='linkButton'>Github</a>
                        </div>
                        <div className='divRight'>
                               <img className='projectImage' src='/image/capstone.png'/>
                        </div>
                  </div>
            )
      }
      graceshopper(){
            return (
                  <div id = 'graceshopper'>
                  <h2 className='projectsHeader'>always & forever</h2>
                  <div className='divLeft'>
                        <h4 className='projectsHeader'>Description</h4>
                        <p>
                        An e-commerce site in which guests and logged-in users alike can browse, and purchase wedding dresses. Users can manage their accounts and admins can make edits to the website functionality.. 
                        </p>
                        <h4 className='projectsHeader'>Tech stacks</h4>
                              <ul>
                                    <li>Javascript</li>
                                    <li>React/Redux</li>
                                    <li>Express.js and Sequelize</li>
                                    <li>Haiku Animator and Lottie</li>
                              </ul>
                              <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Website</a>
                              <a href='https://github.com/2011-gravity0/tamagenki' className='linkButton'>Github</a>
                  </div>
                  <div className='divRight'>
                         <img className='projectImage' src='/image/capstone.png'/>
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