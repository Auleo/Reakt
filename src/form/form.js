import React from 'react';
import React {Component } from 'react';
import './App.css';


const TextInput = () => {}

const PasswordInput = () => {}

const Button = () => {}

const Form =() => {}

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>

const EmailInput = ({value, onChange})=>{
  return (
    <div className ="form-group">
      <input class="form-control" placeholder="wypisz email"  type="password" value={value} onChange={(ev)=>{
        onChange(ev.target.value)
    }}/>
    </div>
  )
}
const PasswordInput = ({value, onChange})=>{
  return (
    <div className ="form-group">
      <input class="form-control" placeholder="wypisz hasło" type="Wypisz hasło" value={value} onChange={(ev)=>{
        onChange(ev.target.value)
    }}/>
    </div>
  )
}

const Button = () =>{} 

class AuthForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      'email':'', 
      'password': ''   
    }
  }
  render() {
    return (
      <form className="form">

        <EmailInput/>
        <PasswordInput/>
        <h1>Formularz logowania</h1>
        {JASON.tringify(this.state)}
      </form>
    )
  }
}

const App = () => {
  return (
    <div className = 'app' >
      <div className = 'container'>

        </div>
        <AuthForm/>
        )
      </div>
  )
export default App.js


//</div>/import TodoList from './components.js'
//</div>import React, { Component } from 'react';

//</form>class App extends Component {
//render(){
 /// return (
//    <table>
//    <tr><td></td><td></td><td></td></tr>
//    <tr><td></td><td></td><td></td></tr>
//    <tr><td></td><td></td><td></td></tr>
//    </table>
//    )
//  }
//}
  
//    export {} defaul App;

  //  return (
  //    table className={this.props.klasa}>



// JSX i VirtualDOM

//const TempComponent = ({text})=>{
 // return (<h1>{text}</h1>)
//}

// const Component = (props) => {
  // return (html)
// }

//const BlueDiv = ({children})=>{
  //return (
    //<div style={{background:'blue', padding:10}}>
    //<h2>test1</h2>
      //{children}
   // </div>
  //)
//}
//const RedDiv = ()=>{
  //return (
   // <div style={{background:'red'}}>
     // test2
   // </div>
 // )
//}

//const App = () => {
//  return (
//    <div className="app">
//    <BlueDiv>
//      <RedDiv/>
//      <RedDiv/>
//      <RedDiv/>
//      <RedDiv/>
//    </BlueDiv>
//    </div>
//  );
//}

//export default App;
nom import React from 'react'
import renderer from 'react-test-renderer'

import { form } from '../form'

describe('<form />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(<form {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
