import React from 'react'

export default class resume extends React.Component{
      render(){
            return(
                  <div id = 'resume'>
                        <a className='linkButton'  href="/image/resume.pdf" download>Download Resume</a>
                        <div id='header'>
                              <h2 className='header'>Education</h2>
                              <h3 className=''></h3>
                        </div>
                  </div>
            )
      }
}