import React from 'react'
import Axios from 'axios'
import './css/style.css'
import signup from './Signup'
import {Link, Redirect,Route,Switch} from 'react-router-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        username : '',
        password : '',
        isLoggedIn: false
        
    }}
    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    Login = (e) =>{
        e.preventDefault();
      const  userdata = {
            username: this.state.username,
            password: this.state.password
        }

        Axios.post("http://localhost:8888/login", userdata).then ((response)=>{
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('username', response.data.username)
            this.setState({ isLoggedIn: true })
        }).catch((err) => console.log(err.response))
    this.setState({ username: '', password: '' })
}
render() {   
    if (this.state.isLoggedIn == true) {
        return <Redirect to='/dashboard' />
    }
        return (
           
            <div class="container">
		
		<div class="login-content">
			<form >
				<img src={require("./img/avatar.svg")}/>
				<h2 class="title">Welcome</h2>
           	
           		
                <div class="form-group">
           		   		<input type="text" placeholder="Username" class="form-control" value={this.state.username} onChange={this.handleChange} name="username" required="required"/>
           	
           		</div>

                
           		
           		  
					 
					
               <div class="form-group">
           		    	
   <input type="password" placeholder="Password"class="input form-control" id="password-field" value={this.state.password} onChange={this.handleChange} name="password" required="required"/>
					</div>	 
				
				
			

            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login" onClick={this.Login}/>

                <Link class="nav-link" to="/signup" replace>Signup</Link>
 
            </form>
            </div>
                <div class="img">
                    <img src={require("./img/bg.svg")} />
                </div>
              </div>
  
   
        )
    }
}

export default Login