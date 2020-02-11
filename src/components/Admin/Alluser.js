import React from 'react'
import axios from 'axios'
import '.././user.css'
import { Route, NavLink, Switch } from 'react-router-dom'

import '../user.css'

class Alluser extends React.Component {

    deleteUser = () => {
        axios.delete('http://localhost:8888/delete/' + this.props.id)
        window.location.reload(false)
    }

    render() {

        return (
           
            <section>
             <table className="detail"><tr>
        <td className="firstname"> {this.props.name}</td>
        <td className="lastname"> {this.props.address}</td>
                  <td className="lastname"><NavLink to={"/singleuser/" + this.props.id}>More Details</NavLink></td>
                    <td className="view"><NavLink to={"/updatesingleuser/" + this.props.id}>Edit</NavLink></td>
                    <td><button   className="bg-danger" onClick={this.deleteUser}><filled/>Delete</button></td>
          
  
    
   
    </tr>  </table>
             
               
            
                   

              

            </section>
        )
    }
}

export default Alluser;
