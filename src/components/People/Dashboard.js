import React from 'react'
import axios from 'axios'

import '../user.css'
import { Redirect } from 'react-router-dom'

import Navigation from '../Navigation'
import { Nav } from 'reactstrap'
import People from '../../containers/People/People'
class Dashboard extends React.Component {

    state=
    {
        headerdata:
        {
            header : {Authorization : `Bearer ${localStorage.getItem('token')}`}
        }
        }

        Logout=()=>
        {
        axios.post("http://localhost:5000/logout", this.state.headerdata);
            localStorage.removeItem('token')
            window.location.href='/login'
            return <Redirect to='/login'></Redirect>
        }

componentDidMount()
    {
       
    }


    render() {
        if(this.state.headerdata.header.Authorization=="Bearer null")
        {
           return <Redirect to='/login'/>
        }
        return (
            <section>
                <Navigation></Navigation>
               
                <People></People>

            </section>
        )
    }
}

export default Dashboard;
