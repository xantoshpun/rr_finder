import React from 'react'
import axios from 'axios'

import './css/user.css'

import Listcategory from '../../components/Category/listcategory'

class Category extends React.Component {

    state = {
        mydata: []
    }



    componentDidMount() {
        axios.get("http://localhost:5000/category").then(res => {
            //console.log(res)
            this.setState({ mydata: res.data })
        })
    }


    render() {
        const category = this.state.mydata.map(hlists => {
            return <Listcategory
                id={hlists._id}
                categoryname={hlists.categoryname}
                description={hlists.description}
    />
        })
        return (
            <section>
                <div >
           
                <h3 className="list">List of Category</h3>
               
                <div className="show">{category}</div>
    



                
          
                </div>
            </section>
        )
    }
}

export default Category