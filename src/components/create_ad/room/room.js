import React from "react"
import axios from "axios"
import ".././user.css"
import { Route, Link, Switch } from "react-router-dom"

import "../user.css"

class Room extends React.Component {
	deleteUser = () => {
		axios.delete("http://localhost:8888/delete/" + this.props.id)
		window.location.reload(false)
	}

	render() {
		return (
			<section>
				<table class="table">
					<tbody>
						<tr>
							<td> Name: {this.props.name}</td>
							<td> Username: {this.props.username}</td>
							<td>
								<Link to={"/singleuser/" + this.props.id}>
									Click Here for More Details
								</Link>
							</td>
							<td>
								<Link to={"/updatesingleuser/" + this.props.id}>
									Click Here to Edit
								</Link>
							</td>
							<td>
								<button className="btn btn-danger" onClick={this.deleteUser}>
									<filled />
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		)
	}
}

export default Room
