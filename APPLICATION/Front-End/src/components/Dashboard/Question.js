import {useEffect, useState} from 'react';
import './dashboard.css';

import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';


function Question() {
  
  const history = useHistory();
//----------- show gategory added in datatable------------
const [questions , setQuestions] = useState(null);

useEffect(()=>{

  axios.get(`http://localhost:8081/question`)
    .then(function (response) {
     
      console.log(response.data);
      setQuestions(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })
// ---------------Delete Question-------------------

const deleteQuestion = (id)=>{
  axios.delete(`http://localhost:8081/question/delete/${id}`)
  .then(function (response) {
    console.log('item was deleted Succesfully ... ');
  
  })
  

}
const getIdQuestion = (id)=>{
  localStorage.setItem('idQuestion',id);
  history.push('/editQuestion');

}
   
  return(
  <div>
    


<div class="container">
  <div class="table-wrapper">
    <div class="table-title">
      <div class="row">
        <div class="col-sm-6">
          <h2>Manage <b>Questions</b></h2>
        </div>
        <div class="col-sm-6">
        <Link to="/addQuestion" className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Question</span></Link>  

        </div>
      </div>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Incorrect Answers 1</th>
              <th>Incorrect Answers 2</th>
              <th>Incorrect Answers 3</th>
              <th>Category</th>
              <th>Actions</th>
        </tr>
      </thead>
      { questions && questions.map(item =>(
      <tbody>
        <tr>
        <td>{item.question}</td>
          <td>{item.correctAnswer}</td>
          <td>{item.incorrectAnswer1}</td>
          <td>{item.incorrectAnswer2}</td>
          <td>{item.incorrectAnswer3}</td>
          <td>{item.nameCategory}</td>
          <td>		

             <Link  onClick={()=> getIdQuestion(item._id)} class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></Link>
             {/* <Link to="/editQuestion" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></Link> */}
             <Link onClick={() => deleteQuestion(item._id)} class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></Link>
        </td>
        </tr>
        </tbody>
         ))}
        </table>
        </div>
        </div>
        </div>

  )
}
export default Question;