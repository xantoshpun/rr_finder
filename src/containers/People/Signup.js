import React, { Component } from 'react'
import './css/user.css'
import axios from 'axios'
import { Link, Redirect} from 'react-router-dom';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

 class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            email:'',
            phone:'',
            username: '',
            password: '',
            isRegistered: false
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:8888/sign_up', this.state)
            .then((response) => {
                console.log(response.data);
         
                       this.setState({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email:this.state.email,
                    phone:this.state.phone,
                    username: this.state.username,
                    password:this.state.password,
                  
                });

                this.setState({ isRegistered: true })

            }).catch((err) => console.log(err))
            window.location.href='/login'
            return <Redirect to='/login' />
    }
    render() {
        if (this.state.isRegistered === true) {
            window.location.href='/login'
            return <Redirect to='/dashboard' />
        }
        return (
            <div class="container">
           
            <div class="login-content">
                
                <form  method="post" action="http://localhost:5000/signup">
                <img src={require("./img/avatar.svg")}/>
				<h5>Sign up here</h5>
                <div class="form-group">
                            <input type="text" placeholder="Name" class="form-control" name="name" required="required" value={this.state.name} onChange={this.handleChange} />
                   
                       </div>
                       <div class="form-group">
                                  <input type="text" placeholder="Address" class="form-control" name="address" required="required"  value={this.state.address} onChange={this.handleChange} />
                   
                       </div>
                       <div class="form-group">
                                  <input type="text" placeholder="Email" class="form-control" name="email" required="required"  value={this.state.email} onChange={this.handleChange} />
                   
                       </div>
                       <div class="form-group">
                            <input type="text" placeholder="Mobile number" class="form-control" name="mobile" required="required" value={this.state.mobile} onChange={this.handleChange} />
                   
                       </div>
                       
                    <div class="form-group">
                                  <input type="text" placeholder="Username" class="form-control" name="username" required="required"  value={this.state.username} onChange={this.handleChange} />
                   
                       </div>
    
                    
                       
                         
                         
                        
                   <div class="form-group">
                               
       <input type="password" placeholder="Password"class="input form-control" id="password-field" name="password" required="required"  value={this.state.password} onChange={this.handleChange} />
                        </div>	 
                    
                    
        
                    <input type="submit" class="btn" value="Register" onClick={this.register}/>
    
                    <Link class="nav-link" to="/login">Sign in here!!</Link>
     
                </form>
                </div>
                <div class="img">
                    <img src={require("./img/bg.svg")} />
                </div>
                  </div>
       
               

        )
    }
}

export default Signup