import React from "react"
import "./css/style.css"

class Home extends React.Component {
	render() {
		return (
			<div class="home_container">
				<img class="img-fluid" src={require("./img/rr_finder.png")} />
				<a href="/login" class="btn btn-success login">
					LOGIN
				</a>
				<a href="/signup" class="btn btn-success sign_up">
					SIGN UP
				</a>
			</div>
		)
	}
}

export default Home
