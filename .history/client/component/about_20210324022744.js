import React from 'react'

export default class about extends React.Component{
      constructor(props){
            super(props)
            this.story = this.story.bind(this)
            this.skills = this.skills.bind(this)
      }
      skills(){
            return (
                  <div id='divSkills'>
                        <img id='rubyLogo' src
                        <img id='cssLogo' src='public/image/CSSlogo.png'/>
                        <img id='htmlLogo' src='public/image/htmlLogo.png'/>
                        <img id= 'reduxLogo'  src='public/image/Redux.png' />
                        <img id='nodeLogo' src='public/image/nodejsLogo.png'/>
                        <img id='reactLogo' src='public/image/ReactLogo.png'/>
                        <img id='expressLogo' src='public/image/expressLogo.png'/>
                        <img id='javascriptLogo' src='public/image/JavaScript-logo.png'/>
                  </div>
            )
      }
      story(){
            return (
                  <div id = 'divStory'>
                        <p> 
                              Growing up in Nigeria, I love solving the riddles in my grandfather old newspaper. Sometimes, it can take a few days or even a week to solve yet I persist. I will try to  rememeber solutions to old riddles or ask people indirect questions inother to solve it.  
                              Should after a while I couldn't solve it, sadly, I check the answer. I look to understand why I couldn't answer it and the logical that goes into it so I can't be stumped by such question again.  
                        </p>
                        <p>
                              This pesistant and dedication is what lead me to software engineering. The need to solve it, to learn,  to understand and to optimize my solution for future use has been my biggest driver. 
                        </p>
                        <p>
                              My road map to software engineering hasn't been a stright line but it has been one won through tears, dedication, passion and hardwork. 
                        </p>
                  </div>
            )
      }
      render(){
            return(
                  <div >
                        <img id = 'img' src='public/image/loonapix_16165602921298317083.png'/>
                        {this.story()}

                  </div>
            )
      }
}