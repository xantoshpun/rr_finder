import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import SingleUser from './components/People/singleuser';
import UpdateSingleUser from './components/People/updateuser';
import SignUp from './containers/People/Signup';
import Login from './containers/People/Login';
import { Route, NavLink, Switch } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './components/People/Dashboard';
import People from './containers/People/People';
import AddCategory from './components/Category/addcategory';
import Viewcategory from './components/Category/viewcategory';
import EditCategory from './components/Category/editcategory';

function App() {
  return (
    <BrowserRouter>


      <div className="App ">



        <Switch>
          <Route path="/singleuser/:id" component={SingleUser} />
          <Route path="/updatesingleuser/:id" component={UpdateSingleUser} />
          <Route path="/viewuser" component={People} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/addcategory" component={AddCategory} />
          <Route path="/listcategory" component={Viewcategory} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/editcategory" component={EditCategory} />
        </Switch>

      </div>
    </BrowserRouter>
  )
}

export default App;
