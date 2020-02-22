import React from "react"
import axios from "axios"
import "./css/style.css"
import signup from "./Signup"
import { Link, Redirect, Route, Switch } from "react-router-dom"
import { Button } from "reactstrap"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const token = null

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			password: "",
			isLoggedIn: false
		}
		this.login = this.login.bind(this)
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	login = e => {
		e.preventDefault()
		const data = {
			username: this.state.username,
			password: this.state.password
		}
		axios
			.post("http://localhost:8888/login", data)
			.then(response => {
				localStorage.setItem("token", response.data.token)
				localStorage.setItem("name", response.data.name)
				localStorage.setItem("username", response.data.username)
				localStorage.setItem("u_id", response.data._id)
				this.setState({ isLoggedIn: true })
			})
			.catch(err => console.log(err.response))
	}

	render() {
		if (this.state.isLoggedIn === true) {
			return <Redirect to="/dashboard" />
		}
		return (
			<div class="container d-flex justify-content-center">
				<div class="login-content">
					<form class="loginForm" onSubmit={this.login}>
						<img src={require("./img/avatar.svg")} />
						<h2>Welcome</h2>
						<h5>You can Login</h5>

						<div class="form-group">
							<input
								type="text"
								placeholder="Username"
								class="form-control"
								value={this.state.username}
								onChange={this.handleChange}
								name="username"
								required
							/>
						</div>

						<div class="form-group">
							<input
								type="password"
								placeholder="Password"
								class="input form-control"
								id="password-field"
								value={this.state.password}
								onChange={this.handleChange}
								name="password"
								required
							/>
						</div>

						<a href="#">Forgot Password?</a>
						<button type="submit" value="submit" class="btn btn-success">
							Login
						</button>

						<Link class="nav-link" to="/signup" replace>
							Signup
						</Link>
					</form>
				</div>
			</div>
		)
	}
}

export default Login
