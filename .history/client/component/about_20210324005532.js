import React from 'react'

export default class about extends React.Component{
      constructor(props){
            super(props)
            this.story = this.story.bind(this)
      }
      story(){
            return (
                  <p> 
                        My road map to software engineering hasn't been a stright line but it has been one won through tears, dedication and hardwork. 
                        Growing up in Nigeria, I love solving the riddles in my grandfather old newspaper. Sometimes, it can take a few days or even a week to solve yet I persist. I will try to  remeber old riddles 
                  </p>
            )
      }
      render(){
            return null
      }
}