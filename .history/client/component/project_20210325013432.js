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
                              <button
                        </div>
                        <img className='projectImage' src='/image/capstone.png'/>
                        <div className='modula'>
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