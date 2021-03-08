import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import axios from 'axios';

import './dashboard.css';





function AddCategory() {

const history=useHistory();

	const [nameCategory, setNameCategory] = useState();


	const handleSubmit = (e) => {
		e.preventDefault();

	const category = {nameCategory};

	axios.post(`http://localhost:8081/category/add`,category)
          

  
		.then(res => {
		    if(res.error){
				return false
			}else{
				
				 console.log(res.data);
         history.push('/categories')
			}
		 
		})
	}

  return(
    
    <div className="container-xl">


  <form id="form" data-parsley-validate onSubmit={handleSubmit}>
    
        <h1>Add New Category</h1>
        <fieldset>
          <input className="form-control" type="text" placeholder="Name Category"
                value={nameCategory}
                onChange={e => setNameCategory(e.target.value)} 
          required/>
        </fieldset>
        <br></br>
        <fieldset>
        <button type="submit" id="AddCatg">Add Category</button>
        </fieldset>
      </form>
</div>

  )
}
export default AddCategory;