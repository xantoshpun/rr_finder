import React from 'react'
import axios from 'axios'

import '.././user.css'
import Navigation from '../Navigation'
class SingleUser extends React.Component {
    state = {
        singledata: []
    }



    componentDidMount() {
        axios.get("http://localhost:5000/user/"+this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ singledata: res.data })
        })
    }
    render(){
        return(
            <section>
           <Navigation></Navigation>
                <div class="card top">
                <img className="avatar" src={require("../.././containers/People/img/avatar.svg")} alt="John"/>

  <h1> {this.state.singledata.firstname} {this.state.singledata.lastname}</h1>
  <p class="title">{this.state.singledata.email}</p>
  <p>Harvard University</p>
 
  <p><button>{this.state.singledata.phone}</button></p>


                <h2>{this.state.singledata.username}</h2>
                
               </div></section>
        )
    }
}

export default SingleUser