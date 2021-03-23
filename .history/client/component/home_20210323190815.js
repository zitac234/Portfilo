import React from 'react';
export default class home extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      background(){
            // <div className="area" >
            //       <ul className="circles" id='circles'>
            //       </ul>
            // </div >
            // console.log( document.getElementById('circles'))
            const unorderedList = document.create
            for(let i = 0; i < 10; i++){
                  const listedItem = document.createElement('li')
                  const unorderedList = document.getElementById('circles')
                  unorderedList.appendChild(listedItem)
            }
      }
      render(){
            return<div>{this.background()}</div>
      }
}