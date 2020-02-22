import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import "jquery"

import Navigation from "./components/navigation"
import Home from "./containers/home"
import SingleUser from "./components/People/singleuser"
import UpdateSingleUser from "./components/People/updateuser"
import SignUp from "./containers/Signup"
import Login from "./containers/Login"
import { Route, NavLink, Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Dashboard from "./components/People/dashboard"
import AddRoom from "./components/create_ad/room/add_room"
import AddRoomie from "./components/create_ad/roomie/add_roomie"

function App() {
	return (
		<BrowserRouter>
			<div className="App ">
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/singleuser/:id" component={SingleUser} />
					<Route path="/updatesingleuser/:id" component={UpdateSingleUser} />
					<Route path="/signup" component={SignUp} />
					<Route path="/login" component={Login} />
					<Route path="/addroom" component={AddRoom} />
					<Route path="/addroomie" component={AddRoomie} />
					<Route path="/dashboard" component={Dashboard} />
				</Switch>
			</div>
		</BrowserRouter>
	)
}

export default App
