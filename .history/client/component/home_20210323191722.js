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
            const myDiv = document.getElementById('area')
            const unorderedList = document.createElement('ul')
            unorderedList.setAttribute('className', 'circles')
            unorderedList.setAttribute('id', 'circles')
            myDiv.appendChild(unorderedList)
            for(let i = 0; i < 10; i++){
                  const listedItem = document.createElement('li')
                  unorderedList.appendChild(listedItem)
            }
            // document.appendChild(myDiv)
      }
      render()
      console.log()
      {
            return<div className =  'area' id = 'area'></div>
      }
}