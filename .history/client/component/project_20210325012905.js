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
                              <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Github</a>
                              <a href='http://tamagenki.herokuapp.com/' className='linkButton'>Website</a>
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