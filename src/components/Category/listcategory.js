import React from 'react'
import axios from 'axios'
import '.././user.css'
import {  NavLink} from 'react-router-dom'

import '../user.css'


class Listcategory extends React.Component {

    deleteCat = () => {
        axios.delete('http://localhost:5000/singlecat/' + this.props.id)
        window.location.reload(false)
    }

    render() {

        return (
           
            <section>
             <table className="detail"><tr>
        <td className="firstname"> {this.props.categoryname}</td>
        <td className="lastname"> {this.props.description}</td>
                        <td className="lastname"><NavLink to={"/editcategory/" + this.props.id}>Edit</NavLink></td>
                    <td  className="view" ><button className="bg-danger"onClick={this.deleteCat}>Delete</button></td>
          
  
    
   
    </tr>  </table>
             
               
            
                   

              

            </section>
        )
    }
}

export default Listcategory;
