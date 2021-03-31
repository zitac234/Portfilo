import React from 'react'

export default class resume extends React.Component{
      render(){
            return(
                  <div >
                        <h1>RESUME</h1>
                        <a className='linkButton' id= 'resumeButton' href="/image/resume.pdf" download>Download Resume</a>
                        <h2 className='work'>Work Experience</h2>
                        <div className='header'>
                              <div id='code'>
                                    <div className='resumeLeft'>
                                          <h3 >Code Nation</h3>
                                          <h5>Volunteer</h5>
                                    </div>
                                    <div className='resumeRight'>
                                          <ul>
                                                <li>Help students debug codes </li>
                                                <li>prepare for lessons for students </li>
                                                <li>teach HTML and CSS syntax to students</li>
                                          </ul>
                                    </div>
                              </div>
                              <div id='cna'>
                                    <div className='resumeLeft'>
                                          <h3 >Split Rock Rehab and Healthcare Center</h3>
                                          <h5>Certified Nursing Assistant</h5>
                                    </div>
                                    <div className='resumeRight'>
                                          <ul>
                                                <li>Organize and prioritize work to complete assignments in a timely</li>
                                                <li>Work well independently and on a team to solve problems </li>
                                                <li>Assist Residents with ADL’s and interfaced with families </li>
                                          </ul>
                                    </div>
                              </div>
                        </div>
                        <h2 className='school'>Education</h2>
                        <div className='header'>
                              <div id='fullstack'>
                                    <div className='resumeLeft' >
                                          <h3 >FullStack Academy</h3>
                                          <h5>Web development</h5>
                                         
                                    </div>
                                    <div className='resumeRight'>
                                          <h4>Relevant Coursework</h4>
                                          <ul>
                                                <li>Express.js</li>
                                                <li>Javascript</li>
                                                <li>React/Redux</li>
                                                <li>Sequelize/Postgres</li>
                                          </ul>
                                    </div>
                              </div>
                              <div id='hudson'>
                                    <div className='resumeLeft' >
                                          <h3 >Hudson Valley Community College</h3>
                                          <h5>Individual Studies</h5>
                                    </div>
                                    <div className='resumeRight'>
                                          <h4>Relevant Coursework</h4>
                                          <ul>
                                                <li>C++</li>
                                                <li>MathLab</li>
                                                <li>Calculus I, II & III </li>
                                                <li>Diferential Equation</li>
                                          </ul>
                                    </div>
                                    
                              </div>
                        </div>
                  </div>
            )
      }
}