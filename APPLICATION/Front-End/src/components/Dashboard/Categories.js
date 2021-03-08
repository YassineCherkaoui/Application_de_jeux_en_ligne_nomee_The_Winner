import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

import './dashboard.css';






export default class Categories extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        categories:[]
      }
   
}

//----------- show gategory added in datatable------------
getCategory = () =>{
  axios.get(`http://localhost:8081/category`)
.then(res => {
  this.setState({
          categories : res.data
      })

})
} 


componentDidMount() {
   this.getCategory();
}

getId(id){
  console.log(id);
  localStorage.setItem('idCategory',id);
  this.props.history.push('/editCategory');

}
// ---------------Delete Category-------------------


  deleteCategory(id){

    axios.delete(`http://localhost:8081/category/delete/${id}`)
      .then(res => {
        console.log(res);
     
        window.location.reload(); 
 
      })
  
  }

  render() {
    return (
      <div>
   <div className="container-xl">

     <div className="table-responsive">
       <div className="table-wrapper">
         <div className="table-title">
           <div className="row">
             <div className="col-sm-6">
               <h2>Manage <b>Category</b></h2>
             </div>
            <div className="col-sm-6">
               <Link to="/addCategory" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Category</span></Link>
             
             </div>
           </div>
         </div>
         <table className="table table-striped table-hover">
           <thead>
             <tr>
               <th>Name</th>
               <th>Actions</th>
             </tr>
           </thead>
           {this.state.categories.map(item =>(
        <tbody id="row">
          <td>{item.nameCategory}</td>
          <td>

            <Link  onClick={()=> this.getId(item._id)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></Link>
            <Link  onClick={(e) => this.deleteCategory(item._id, e)} class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></Link>
        </td>
          </tbody>
           ))}
        </table>

      </div>
    </div>
  </div>
      </div>
    )
  }
}

