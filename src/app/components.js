import React from 'react';

const EmailInput = ({value, onChange})=>{
    return (
      <div className="form-group">
        <input className="form-control"
          placeholder="Wpisz email"
          type="email" value={value} 
          onChange={(ev)=>{
            onChange(ev.target.value)
          }}/>
        </div>
    )
  }
  
  const PasswordInput = ({value, onChange})=>{
    return (
      <div className="form-group">
        <input className="form-control" 
        placeholder="Wpisz hasło"
        type="password" value={value} onChange={(ev)=>{
          onChange(ev.target.value)
        }}/>
        </div>
    )
  }
  
  const Button = ({onClick, text})=>{
    return (
      <div className="form-group">
        <button onClick={onClick} 
        className="btn btn-primary btn-sm form-control">{text}</button>
        </div>
    )
  }
  
  
class AuthForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      'email':'',
      'password':'', 
      'imAuthed': false,
      'imBusy': false
    }

    this.onChangeEmail = this.onChangeEmail.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onLogout = this.onLogout.bind(this)

  }

  onChangeEmail(value){
    // console.log('onChangeEmail', value)

    // tak robimy
    this.setState({
      'email':value
    })

    // tak nie robimy !!
    // this.state.email = value
  }

  onChangePassword(value){
    // console.log('onChangePassword', value)

    this.setState({
      'password':value
    })

  }

  onLogin(ev){
    ev.preventDefault()

    const {email, password} = this.state

    this.setState({
      imBusy:true
    })
    // prawie jak axios
    setTimeout(()=>{
      this.setState({
        imAuthed: true,
        imBusy: false
      })
    }, 2000)
  }

  onLogout(ev){
    ev.preventDefault()

    this.setState({
      imBusy:true
    })

    // prawie jak axios
    setTimeout(()=>{
      this.setState({
        imAuthed: false,
        imBusy: false,
        email:'',
        password:''
      })
    }, 1000)
  }

  render(){

    const {email, password, imAuthed, imBusy} = this.state

    if(imBusy){
      return (
        <div className="alert alert-primary">
          <h1>loading</h1>
        </div>
      )
    }

    if (imAuthed){
      return (
        <div className="alert alert-success">
          <h1>Hej {email}!</h1>
          <h1>Dziękuje za zalogowanie się do apki</h1>
          <Button text='Wyloguj' onClick={this.onLogout}/>
        </div>
      )
    }
    else{    
      return (
        <form className="form">
          <h1>Formularz logowania</h1>
          <EmailInput value={email} onChange={this.onChangeEmail}/>
          <PasswordInput value={password} onChange={this.onChangePassword}/>
          <Button onClick={this.onLogin} text='Zaloguj'/>
          <hr/>
          {JSON.stringify(this.state)}
        </form>
      )
    }

  }
}

export {EmailInput, PasswordInput, Button}
