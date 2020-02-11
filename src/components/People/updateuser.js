import React from 'react'
import axios from 'axios'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
import '.././user.css'
class UpdateSingleUser extends React.Component {
    state = {
        singledata: [],
        username : '',
        lastname: '',
        firstname : '',
        
        email : '',
        phone : ''
    }



    componentDidMount() {
        axios.get("http://localhost:5000/user/" + this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ 
                singledata: res.data,
                username : res.data.username,
                firstname : res.data.firstname,
                lastname : res.data.lastname,
                email : res.data.email,
                phone : res.data.phone    
             })
        })
    }

    UpdateData = () => {
        const data = {
            username : this.state.username,
            email : this.state.email,
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            phone: this.state.phone
        }

        axios.put("http://localhost:5000/single/" + this.props.match.params.id,
            data)
        window.location.reload(false)
        window.location.href='/dashboard'
        return <Redirect to='/dashboard'></Redirect>

    }


    render() {
        return (
            <section>
                <Navigation></Navigation>
            

            <div className="container center_div">
                
    <div class="col-lg-8 col-md-4 col-offset-8 centered">

            <div class="form-group">
            <label for="firstname">First Name:</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Firstname" name="firstname" value = {this.state.firstname} 
                    onChange={(event)=>this.setState({firstname:event.target.value})}/>
        </div>
        <div class="form-group">
            <label for="firstname">Last Name:</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Lastname" name="lastname" value = {this.state.lastname} 
                    onChange={(event)=>this.setState({lastname:event.target.value})}/>
        </div>
       
        <div class="form-group">
            <label for="name">Email:</label>
            <input type="text" class="form-control" id="address" placeholder="Enter Email Address" name="email" value = {this.state.email} 
                    onChange={(event)=>this.setState({email:event.target.value})}/>
        </div>
        <div class="form-group">
            <label for="name">Mobile Number:</label>
            <input type="text" class="form-control" id="mobile" placeholder="Enter Mobile Number" name="phone" value = {this.state.phone} 
                    onChange={(event)=>this.setState({phone:event.target.value})}/>
        </div>
        <div class="form-group">
            <label for="name">Username:</label>
            <input type="text" class="form-control" id="mobile" placeholder="Username" name="username" value = {this.state.username} 
                    onChange={(event)=>this.setState({username:event.target.value})}/>
        </div>
        <button type="submit" onClick={this.UpdateData} class="btn btn-success">Update</button>
       
            </div></div>    </section>
        )
    }
}

export default UpdateSingleUser