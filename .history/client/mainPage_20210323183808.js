import React from 'react';
class mainPage extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      background(){
            <div class="area" >
                  <ul id="circles">
                  </ul>
            </div >
            for(let i = 0; i < 10; i++){
                  const listedItem = document.createElement('li')
                  const unorderedList = document.getElementById('circles')
                  unorderedList.appendChild(listedItem)
            }
      }
      render(){
            return null
      }
}