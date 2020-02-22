import React from "react"
import axios from "axios"
import Navigation from "../../navigation"
import { Redirect } from "react-router-dom"
import "../../../containers/css/style.css"

class AddRoomie extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			u_id: "",
			username: "",
			location: "",
			number: "",
			rent: "",
			description: ""
		}
		this.addRoomie = this.addRoomie.bind(this)
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addRoomie = e => {
		e.preventDefault()
		console.log(this.state)
		const u_id = localStorage.getItem("u_id")
		const username = localStorage.getItem("username")
		const data = {
			u_id: u_id,
			username: username,
			location: this.state.location,
			number: this.state.number,
			rent: this.state.rent,
			description: this.state.description
		}
		axios
			.post("http://localhost:8888/room", data)
			.then(response => {})
			.catch(err => console.log(err))
		alert("New AD created successfully")
	}

	render() {
		return (
			<section>
				<Navigation />
				<div className="container">
					<h3>Here you can create a new advertisement for Room</h3>
					<form onSubmit={this.addRoomie}>
						<div className="left">
							<div className="center">
								<div className="form-group ">
									<label htmlFor="location">Location Name</label>
									<input
										type="text"
										className="form-control"
										id="location"
										placeholder="Location"
										name="location"
										value={this.state.location}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group ">
									<label htmlFor="number">Number of Roomie</label>
									<input
										type="text"
										className="form-control"
										id="number"
										placeholder="Number"
										name="number"
										value={this.state.number}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group ">
									<label htmlFor="rent">Rent</label>
									<input
										type="text"
										className="form-control"
										id="rent"
										placeholder="Rent"
										name="rent"
										value={this.state.rent}
										onChange={this.handleChange}
									/>
								</div>
								<div className="form-group ">
									<label htmlFor="description">Description</label>
									<textarea
										className="form-control"
										id="description"
										placeholder="Description"
										name="description"
										value={this.state.description}
										onChange={this.handleChange}
									/>
								</div>

								<button
									type="submit"
									value="submit"
									className="btn btn-success"
								>
									Add Roomie
								</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		)
	}
}

export default AddRoomie
