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
            const myDiv = document.createElement('div')
            const unorderedList = document.createElement('ul')
            myDiv.setAttribute('className', 'area')
            unorderedList.setAttribute('className', 'circles')
            unorderedList.setAttribute('id', 'circles')
            myDiv.appendChild(unorderedList)
            for(let i = 0; i < 10; i++){
                  const listedItem = document.createElement('li')
                  unorderedList.appendChild(listedItem)
            }
            document.appendChild()
      }
      render(){
            return<div>{this.background()}</div>
      }
}