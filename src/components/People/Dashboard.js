import React from "react"
import axios from "axios"

import "../user.css"
import { Redirect } from "react-router-dom"

import Navigation from "../navigation"
import { Nav } from "reactstrap"
import Alluser from "../Admin/Alluser"
class Dashboard extends React.Component {
	state = {
		mydata: [],
		headerdata: {
			header: { Authorization: `Bearer ${localStorage.getItem("token")}` }
		}
	}

	componentDidMount() {
		axios.get("http://localhost:8888/view").then(res => {
			//console.log(res)
			this.setState({ mydata: res.data })
		})
	}

	Logout = () => {
		axios.post("http://localhost:5000/logout", this.state.headerdata)
		localStorage.removeItem("token")
		window.location.href = "/login"
		return <Redirect to="/login"></Redirect>
	}

	render() {
		const mydata222 = this.state.mydata.map(hlists => {
			return (
				<Alluser
					id={hlists._id}
					name={hlists.name}
					address={hlists.address}
					email={hlists.email}
					username={hlists.username}
					phone={hlists.mobile}
				/>
			)
		})
		if (this.state.headerdata.header.Authorization == "Bearer null") {
			return <Redirect to="/login" />
		}
		return (
			<section>
				<Navigation />
				<h1>List of all User</h1>

				{mydata222}
			</section>
		)
	}
}

export default Dashboard
