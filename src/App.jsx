import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './components/child'
import {Header , Logo} from './components/header'

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name : "saimoon",
//       email:"nndd@gmail.com"

//     }
//     senddata=()=>{
//       this.setState({
//         name : "nabeel"
//       })
//     }
//     Getdata=()=>{
//       console.log(this.state.name)
//    }
//   }
//   render(){
//     return(
//       <Div>
//         <h2>{this.state.name}</h2>
// {/* <input onChange={(e)=>this.setState({name:e.target.value})} type="text" id="val"/> */}
// <input onChange={(e)=>this.setState({value:e.target.value})} type="text" id="val"/>
// <button onClick={this.senddata}>send</button>
// <button onClick={this.getdata}>Get</button>
      
//       </Div>
//     )
//   }
// }



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name : "saimoon",
//       email:"nndd@gmail.com",
//       value:""

//     }
//     senddata=()=>{
//       this.setState({
//         name : this.state.value
//       })
//     }
//     Getdata=()=>{
//       console.log(this.state.name)
//    }
//   }
//   render(){
//     return(
//       <Div>
//         <h2>{this.state.name}</h2>
// <input onChange={(e)=>this.setState({value:e.target.value})} type="text" id="val"/>
// <button onClick={this.senddata}>send</button>
// <button onClick={this.getdata}>Get</button>
      
//       </Div>
//     )
//   }
// }



// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name : "saimoon",
//       email:"nndd@gmail.com",
//       value:""

//     }
//     senddata=()=>{
//       this.setState({
//         name : this.state.value
//       })
//     }
//     Getdata=()=>{
//       console.log(this.state.name)
//    }


//   }
//   handleChange(e){
//    this.setState({
//      [e.target.name]:e.target.value
//    })
//   }
//   render(){
//     return(
//       <Div>
//         <h2>{this.state.name}</h2>
// <input name="name" onChange={(e)=>this.handleChange(e)} type="text" id="val"/>
// <input email="email" onChange={(e)=>this.handleChange(e)} type="text" id="val"/>
// <button onClick={this.senddata}>send</button>
// <button onClick={this.getdata}>Get</button>
      
//       </Div>
//     )
//   }
// }


// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name : "saimoon",
//       email:"nndd@gmail.com",
//       value:""

//     }
//     senddata=()=>{
//       this.setState({
//         name : this.state.value
//       })
//     }
//     Getdata=()=>{
//       console.log(this.state.name)
//    }


//   }
//   handleChange(e){
//    this.setState({
//      [e.target.name]:e.target.value
//    })
//   }
//   render(){
//     return(
//       <Div>
//         <Header get-props={this.get-props} name={this.state.name} page="Application page"/>
//         <h2>{this.state.name}</h2>
// <input name="name" onChange={(e)=>this.handleChange(e)} type="text" id="val"/>
// <input email="email" onChange={(e)=>this.handleChange(e)} type="text" id="val"/>
// <button onClick={this.senddata}>send</button>
// <button onClick={this.getdata}>Get</button>
      
//       </Div>
//     )
//   }
// }



class App extends React.Component{
  get_data(data){
    console.log(data)
  }
  render(){
    return(
       <div>
         <Child get_data={this.get_data} name="car" price="10000"/>
         <Child name="watch" price="300"/>
         <Child name="house" price="20000"/>
       </div>
    )
  }
}


export default App;
