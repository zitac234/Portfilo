import React from 'react'

export default class resume extends React.Component{
      render(){
            return(
                  <div id = 'resume'>
                        <a className='linkButton'  href="/image/resume.pdf" download>Download Resume</a>
                        <div className='header'>
                              <h2 className='school'>Education</h2>
                              <div id='fullstack'>
                                    <h3 >FullStack Academy</h3>
                                    <h5>Web development</h5>
                                    <h4>Relevant Coursework</h4>
                                    <ul>
                                          <li>Express.js</li>
                                          <li>Javascript</li>
                                          <li>React/Redux</li>
                                          <li>Sequelize/Postgres</li>
                                    </ul>
                              </div>
                              <div id='hudson'>
                                    <h3 >Hudson Valley Community College</h3>
                                    <h5>Individual Studies</h5>
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
            )
      }
}