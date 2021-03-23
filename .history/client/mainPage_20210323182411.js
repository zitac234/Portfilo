import React from 'react';
class mainPage extends React.Component{
      constructor(props){
            super(props)
            this.background = this.background.bind(this)
      }
      background(){
            return (<div class="area" >
                  <ul class="circles">
                        {for(let i = 0; i < 10; i++)}
                  </ul>
            </div >)
      }
      render(){
            return ()
      }
}