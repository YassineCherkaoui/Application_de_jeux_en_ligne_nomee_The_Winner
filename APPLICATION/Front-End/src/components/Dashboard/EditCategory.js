import { useState,useEffect } from 'react';
// import { Link } from "react-router-dom";
import axios from 'axios';

import './dashboard.css';





const EditCategory =(props) => {


  const [nameCategory, setNameCategory] = useState(null);
   const idCatg=localStorage.getItem('idCategory');

   useEffect(()=>{

    axios.get(`http://localhost:8081/category/${idCatg}`)
    .then(function (response) {
     
      
      setNameCategory(response.data.nameCategory)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })






	const handleSubmit = (e) => {
		e.preventDefault();

    const category = {nameCategory};

    axios.put(`http://localhost:8081/category/update/${idCatg}`,category)
            
  
    
      .then(res => {
          if(res.error){
          return false
        }else{
          
           console.log(res.data);
           props.history.push('/categories')
        }
       
      })

  }


  return(
    
    <div  className="container-xl">



  <form id="form"  onSubmit={handleSubmit}>
    
        <h1>Edit Category</h1>
      
           <input type="text" className="form-control"
           value={nameCategory}
           onChange={(e) => setNameCategory(e.target.value)} />
       
       <br></br>
          <button type="submit" id="AddCatg">Edit Category</button>
 
      </form>
</div>

  )
}
export default EditCategory;