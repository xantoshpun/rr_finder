import React from 'react'
import { withRouter,Link,Redirect } from 'react-router-dom'
import axios from 'axios'
import './user.css'

class Navigation extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        user: null,
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        selectedFile: null,
    }
}
Logout=()=>
{
axios.post("http://localhost:8888/logout", this.state.config);
    localStorage.removeItem('token')
    window.location.href='/login'
    return <Redirect to='/login'></Redirect>
}

componentDidMount() {
    axios.get('http://localhost:8888/profile', this.state.config)
        .then((response) => {
            this.setState({
                user: response.data
            })
        });
} 
handleChange(e) {
  this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
  })
}

    
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-info">
            <Link class="navbar-brand" to="/dashboard"><h2>RR Finder</h2></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/dashboard">All user <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Category
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <Link class="dropdown-item" to="/addcategory">Add Category</Link>
          <div class="dropdown-divider"></div>
          <Link class="dropdown-item" to="/listcategory">List Category</Link>
        </div>
      </li>
                <li class="nav-item">
                  <Link class="nav-link" to='dashboard'>All Sign</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
             
            
              
                    <div class="nav navbar-nav navbar-right">
                    <li class="nav-item dropdown" >
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hello {localStorage.getItem('username')}
                  </a>
                  <div class="dropdown-menu width" aria-labelledby="navbarDropdown">
                    
                    <a class="dropdown-item" href="#">Profile</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" onClick={this.Logout}>Logout</a>
                  </div>
                </li>
               
                       </div>
             
            </div>
        </nav>
        )
    }
}

export default withRouter(Navigation)

