import React from "react"
import { withRouter, Link, Redirect } from "react-router-dom"
import axios from "axios"

class Navigation extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			user: null,
			config: {
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
			},
			selectedFile: null
		}
	}
	Logout = () => {
		axios.post("http://localhost:8888/logout", this.state.config)
		localStorage.removeItem("token")
		localStorage.removeItem("name")
		localStorage.removeItem("username")
		localStorage.removeItem("u_id")
		window.location.href = "/login"
		return <Redirect to="/login"></Redirect>
	}

	componentDidMount() {
		axios
			.get("http://localhost:8888/user", this.state.config)
			.then(response => {
				this.setState({
					user: response.data
				})
			})
	}
	handleChange(e) {
		this.setState({
			user: { ...this.state.user, [e.target.name]: e.target.value }
		})
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/dashboard">
					<h3>RR Finder</h3>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/dashboard">
								All user <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Create AD
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/addroom">
									Create Room AD
								</Link>
								<div className="dropdown-divider"></div>
								<Link className="dropdown-item" to="/addroomie">
									Create Roomie AD
								</Link>
							</div>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								View AD
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/viewroom">
									View Room AD
								</Link>
								<div className="dropdown-divider"></div>
								<Link className="dropdown-item" to="/viewroomie">
									View Roomie AD
								</Link>
							</div>
						</li>
					</ul>

					<div className="nav navbar-nav navbar-right">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Hello {localStorage.getItem("name")}
							</a>
							<div
								className="dropdown-menu dropdown-menu-right"
								aria-labelledby="navbarDropdown"
							>
								<a className="dropdown-item" href="#">
									Profile
								</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item" href="#" onClick={this.Logout}>
									Logout
								</a>
							</div>
						</li>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation
