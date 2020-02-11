import React from 'react'
import axios from 'axios'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
import '.././user.css'
import '../../containers/People/css/style.css'
import Category from '../../containers/People/Category'

class EditCategory extends React.Component {
    state = {
        singledata: [],
        categoryname : '',
        description: ''
    }



    componentDidMount() {
        axios.get("http://localhost:5000/category/" + this.props.match.params.id).then(res => {
            //console.log(res)
            this.setState({ 
                singledata: res.data,
                categoryname : res.data.categoryname,
                description : res.data.description
             })
        })
    }

    UpdateCat = () => {
        const data = {
            categoryname : this.state.categoryname,
            description : this.state.description
        }

        axios.put("http://localhost:5000/singlecat/" + this.props.match.params.id,
            data)
        window.location.reload(false)
        window.location.href='/dashboard'
        return <Redirect to='/dashboard'></Redirect>

    }


    render() {
        
        return (
            <section>
                <Navigation></Navigation>
            
                <div className="container">
            <div class="left">
            
    <div className="center">

            <div class="form-group ">
            <label for="firstname">Category Name</label>
            <input type="text" class="form-control" id="name" placeholder="Categoryname" name="categoryname" value ={this.state.categoryname} 
                    onChange={(event)=>this.setState({categoryname:event.target.value})} />
        </div>
        <div class="form-group ">
            <label for="firstname">Description</label>
            <input type="text" class="form-control" id="name" placeholder="Description" name="description" value = {this.state.description} 
                    onChange={(event)=>this.setState({description:event.target.value})}/>
        </div>
  
         <button type="submit" onClick={this.UpdateCategory} class="btn btn-success">Update Category</button>
       
            </div>
            
            </div> 
          
            </div> 
              </section>
        )
    }
}

export default EditCategory