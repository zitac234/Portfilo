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
                              <p>React/JavaScript</p>

                        </div>
                        <img className='projectImage' src='/image/capstone.png'/>
                        <div className='modula'></div>
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