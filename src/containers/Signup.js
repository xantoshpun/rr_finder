import React, { Component } from "react"
import "./css/user.css"
import axios from "axios"
import { Link, Redirect } from "react-router-dom"
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class Signup extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: "",
			name: "",
			dob: "",
			gender: "",
			email: "",
			mobile: "",
			password: "",
			isRegistered: false
		}
	}

	register = e => {
		e.preventDefault()
		console.log(this.state)

		axios
			.post("http://localhost:8888/sign_up", this.state)
			.then(response => {
				console.log(response.data)

				this.setState({
					username: this.state.username,
					name: this.state.name,
					dob: this.state.dob,
					gender: this.state.gender,
					address: this.state.address,
					mobile: this.state.mobile,
					email: this.state.email,
					password: this.state.password
				})

				this.setState({ isRegistered: true })
			})
			.catch(err => console.log(err))
		window.location.href = "/login"
		return <Redirect to="/login" />
	}
	render() {
		if (this.state.isRegistered === true) {
			window.location.href = "/login"
			return <Redirect to="/dashboard" />
		}
		return (
			<div class=" d-flex justify-content-center">
				<div class="signup-content">
					<form method="post" action="http://localhost:5000/signup">
						<img src={require("./img/login.png")} />
						<h5>Create a new Account from here</h5>
						<div class="form-group">
							<input
								type="text"
								placeholder="Username"
								class="form-control"
								name="username"
								required="required"
								value={this.state.username}
								onChange={event =>
									this.setState({ username: event.target.value })
								}
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								placeholder="Name"
								class="form-control"
								name="name"
								required="required"
								value={this.state.name}
								onChange={event => this.setState({ name: event.target.value })}
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								placeholder="DOB"
								class="form-control"
								name="dob"
								required="required"
								value={this.state.dob}
								onChange={event => this.setState({ dob: event.target.value })}
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								placeholder="Gender"
								class="form-control"
								name="gender"
								required="required"
								value={this.state.gender}
								onChange={event =>
									this.setState({ gender: event.target.value })
								}
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								placeholder="Address"
								class="form-control"
								name="address"
								required="required"
								value={this.state.address}
								onChange={event =>
									this.setState({ address: event.target.value })
								}
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								placeholder="Mobile number"
								class="form-control"
								name="mobile"
								required="required"
								value={this.state.mobile}
								onChange={event =>
									this.setState({ mobile: event.target.value })
								}
							/>
						</div>
						<div class="form-group">
							<input
								type="text"
								placeholder="Email"
								class="form-control"
								name="email"
								required="required"
								value={this.state.email}
								onChange={event => this.setState({ email: event.target.value })}
							/>
						</div>

						<div class="form-group">
							<input
								type="password"
								placeholder="Password"
								class="input form-control"
								id="password-field"
								name="password"
								required="required"
								value={this.state.password}
								onChange={event =>
									this.setState({ password: event.target.value })
								}
							/>
						</div>

						<input
							type="submit"
							class="btn btn-success"
							value="Register"
							onClick={this.register}
						/>

						<Link class="nav-link" to="/login">
							Sign in here!!
						</Link>
					</form>
				</div>
			</div>
		)
	}
}

export default Signup
