import React from 'react'

export default class about extends React.Component{
      constructor(props){
            super(props)
            this.story = this.story.bind(this)
      }
      story(){
            return (
                  <p> My road map to software engineering hasn't been a stright one but it is one won through tears and hardwork</p>
            )
      }
      render(){
            return null
      }
}