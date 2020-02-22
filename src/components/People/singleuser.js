import React from "react"
import axios from "axios"

import ".././user.css"
import Navigation from "../navigation"
class SingleUser extends React.Component {
	state = {
		singledata: []
	}

	componentDidMount() {
		axios
			.get("http://localhost:8888/singleuser/" + this.props.match.params.id)
			.then(res => {
				//console.log(res)
				this.setState({ singledata: res.data })
			})
	}
	render() {
		return (
			<section>
				<Navigation></Navigation>
				<div class="card top">
					<img
						className="avatar"
						src={require("../.././containers/img/avatar.svg")}
						alt="John"
					/>
					<h2>Username: {this.state.singledata.username}</h2>
					<h4>Name: {this.state.singledata.name}</h4>
					<h4>Address: {this.state.singledata.address}</h4>
					<h4>Gender: {this.state.singledata.gender}</h4>
					<h4>Dob: {this.state.singledata.dob}</h4>
					<h4>Mobile No.: {this.state.singledata.mobile}</h4>
					<h4>Email: {this.state.singledata.email}</h4>
				</div>
			</section>
		)
	}
}

export default SingleUser
