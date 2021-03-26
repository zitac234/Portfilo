import React from 'react'

export default class project extends React{
      constructor(props){
            super(props)
            this.capstone = this.capstone.bind()
            this.
      }
      capstone(){
            return (
                  <div>
                        <div>
                              <h3>Tamagenki</h3>
                              <h6>Tech stacks</h6>
                                    React, Redux, JavaScript, Express.js, Sequelize, Haiku Animator, Lottie, React-Chart, Material-UI, Howler.js, PWA</p>
                              <button type='button' className='button'> Learn More </button>
                        </div>
                        <img className='projectImage' src='/image/capstone.png'/>
                        <div className='modula'>
                              <p>
                                    Tamagenki is a pet accountability game that uses push notifications and checklists to help users implement health and mindfulness habits into their daily life. Once a user signs up they are assigned a tamabuddy whose reactions and emotions change when a they check off items from their to-do list. As users acquire points they are able to unlock milestone badges congratulating them on their progress!
                              </p>
                              <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Website</a>
                              <a href='https://github.com/2011-gravity0/tamagenki' className='linkButton'>Github</a>
                        </div>
                  </div>

            )
      }
      render(){
            return(
                  <div>
                        <div id='capstone'>{this.capstone()}</div>
                  </div>
            )
      }
}