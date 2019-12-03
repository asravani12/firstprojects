import React from 'react'
class Component extends React.Component
{
 constructor()
 {
     super();
     this.state={
         data:[]
     }
     this.setStateHandler=this.setStateHandler.bind(this)
 };
 setStateHandler()
 {
     var item="setState..";
     var myArray=this.state.data.slice();
     myArray.push(item)
    };
    render()
    {
        return(
            <div>
                <button onClick={this.setStateHandler}>setState</button>
                <h4> setState:{this.state.data}</h4>
            </div>
        );
    }
}
export default Component;