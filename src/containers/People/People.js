import React from 'react'
import axios from 'axios'

import './css/user.css'
import Alluser from '../../components/Admin/Alluser'


class People extends React.Component {

    state = {
        mydata: []
    }



    componentDidMount() {
        axios.get("http://localhost:8888/view").then(res => {
            //console.log(res)
            this.setState({ mydata: res.data })
        })
    }


    render() {
        const mydata222 = this.state.mydata.map(hlists => {
            return <Alluser
                id={hlists._id}
                name={hlists.name}
                address={hlists.address}
      
                email={hlists.email}
                username={hlists.username}
            
             
                phone={hlists.mobile} />
        })
        return (
            <section>
                <div >
           
                <h3 className="list">List of all users</h3>
               
                <div className="show">{mydata222}</div>
    
                </div>
            </section>
        )
    }
}

export default People