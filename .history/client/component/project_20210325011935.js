import React from 'react'

export default class project extends React{
      constructor(props){
            super(props)
            this.capstone = this,capstone.bind()
      }
      capstone(){
            return (
                  <div></div>
                  <h5></h5>
                  <img className='projectImage' src='/image/capstone.png'/>
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