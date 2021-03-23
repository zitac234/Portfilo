import React from 'react';
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      background(){
            return ( 
                  <div>
                  <div className = 'context'><h2>Welcome, NN</h2></div>
                        <ul className="circles">
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                              <li></li>
                        </ul>
                  </div>
            )
      }
      render()
      {
            return<div >{this.background()}</div>
      }
}