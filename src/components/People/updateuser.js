import React from "react"
import axios from "axios"
import Navigation from "../navigation"
import { Redirect } from "react-router-dom"
import ".././user.css"
class UpdateSingleUser extends React.Component {
	state = {
		singledata: [],
		username: "",
		name: "",
		dob: "",
		gender: "",
		mobile: "",
		email: ""
	}

	componentDidMount() {
		axios
			.get("http://localhost:8888/singleuser/" + this.props.match.params.id)
			.then(res => {
				//console.log(res)
				this.setState({
					singledata: res.data,
					username: res.data.username,
					name: res.data.name,
					dob: res.data.dob,
					gender: res.data.gender,
					address: res.data.address,
					mobile: res.data.mobile,
					email: res.data.email
				})
			})
	}

	UpdateData = () => {
		const data = {
			username: this.state.username,
			name: this.state.name,
			dob: this.state.dob,
			gender: this.state.gender,
			address: this.state.address,
			mobile: this.state.mobile,
			email: this.state.email
		}

		axios.put(
			"http://localhost:8888/update_profile/" + this.props.match.params.id,
			data
		)
		window.location.reload(false)
		window.location.href = "/dashboard"
		return <Redirect to="/dashboard"></Redirect>
	}

	render() {
		return (
			<section>
				<Navigation></Navigation>
				<div className="container center_div">
					<div class="col-lg-8 col-md-4 col-offset-8 centered">
						<h3>Here you can update your profile</h3>
						<div class="form-group">
							<label for="username">Username:</label>
							<input
								type="text"
								class="form-control"
								id="username"
								placeholder="Enter Username"
								name="username"
								value={this.state.username}
								onChange={event =>
									this.setState({ username: event.target.value })
								}
							/>
						</div>
						<div class="form-group">
							<label for="name">Name:</label>
							<input
								type="text"
								class="form-control"
								id="name"
								placeholder="Enter Name"
								name="name"
								value={this.state.name}
								onChange={event => this.setState({ name: event.target.value })}
							/>
						</div>

						<div class="form-group">
							<label for="dob">Dob:</label>
							<input
								type="text"
								class="form-control"
								id="dob"
								placeholder="Enter DOB"
								name="dob"
								value={this.state.dob}
								onChange={event => this.setState({ dob: event.target.value })}
							/>
						</div>

						<div class="form-group">
							<label for="name">Gender:</label>
							<input
								type="text"
								class="form-control"
								id="gender"
								placeholder="Enter Gender"
								name="gender"
								value={this.state.gender}
								onChange={event =>
									this.setState({ gender: event.target.value })
								}
							/>
						</div>

						<div class="form-group">
							<label for="name">Address:</label>
							<input
								type="text"
								class="form-control"
								id="address"
								placeholder="Enter Address"
								name="address"
								value={this.state.address}
								onChange={event =>
									this.setState({ address: event.target.value })
								}
							/>
						</div>

						<div class="form-group">
							<label for="name">Mobile Number:</label>
							<input
								type="text"
								class="form-control"
								id="mobile"
								placeholder="Enter Mobile Number"
								name="mobile"
								value={this.state.mobile}
								onChange={event =>
									this.setState({ mobile: event.target.value })
								}
							/>
						</div>

						<div class="form-group">
							<label for="name">Email:</label>
							<input
								type="text"
								class="form-control"
								id="address"
								placeholder="Enter Email Address"
								name="email"
								value={this.state.email}
								onChange={event => this.setState({ email: event.target.value })}
							/>
						</div>

						<button
							type="submit"
							onClick={this.UpdateData}
							class="btn btn-success"
						>
							Update
						</button>
					</div>
				</div>{" "}
			</section>
		)
	}
}

export default UpdateSingleUser
