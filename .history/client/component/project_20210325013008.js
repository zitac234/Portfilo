import React from 'react'

export default class project extends React{
      constructor(props){
            super(props)
            this.capstone = this,capstone.bind()
      }
      capstone(){
            return (
                  <div>
                        <div>
                              <h3>Tamagenki</h3>
                              <p>React/JavaScript</p>
                              <a href='https://github.com/2011-gravity0/tamagenki' className='linkButton'>Github</a>
                        </div>
                        <img className='projectImage' src='/image/capstone.png'/>
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