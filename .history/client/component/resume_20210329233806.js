import React from 'react'

export default class resume extends React.Component{
      render(){
            return(
                  <div id = 'resume'>
                        <a className='linkButton'  href="/image/resume.pdf" download>Download Resume</a>
                        <div className='header'>
                              <h2 className='school'>Education</h2>
                              <h3 id='fullstack'>FullStack Academy</h3>
                              <h5>Web development </h5>
                        </div>
                  </div>
            )
      }
}