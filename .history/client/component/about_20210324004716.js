import React from 'react'

export default class about extends React.Component{
      constructor(props){
            super(props)
            this.story = this.story.bind(this)
      }
      story(){
            return (
                  <p> My road </p>
            )
      }
      render(){
            return null
      }
}