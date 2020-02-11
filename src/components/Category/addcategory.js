import React from 'react'
import axios from 'axios'
import Navigation from '../Navigation'
import { Redirect } from 'react-router-dom'
import '.././user.css'
import '../../containers/People/css/style.css'
import Category from '../../containers/People/Category'

class AddCategory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categoryname: '',
            description:''
            
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    AddCategory = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:5000/category', this.state)
            .then((response) => {
                console.log(response.data);
         
                       this.setState({
                    categoryname: '',
                    description: ''
                   
                });

            }).catch((err) => console.log(err))
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
            <input type="text" class="form-control" id="name" placeholder="Categoryname" name="categoryname" value={this.state.categoryname} onChange={this.handleChange} />
        </div>
        <div class="form-group ">
            <label for="firstname">Description</label>
            <input type="text" class="form-control" id="name" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} />
        </div>
  
         <button type="submit" onClick={this.AddCategory} class="btn btn-success">Add Category</button>
       
            </div>
            
            </div> 
           <Category></Category>
            </div> 
              </section>
        )
    }
}

export default AddCategory