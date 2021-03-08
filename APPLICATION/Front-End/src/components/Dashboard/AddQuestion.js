import React, { useState,useEffect } from 'react';
import {useHistory } from "react-router-dom";
import axios from 'axios';

import './dashboard.css';





function AddQuestion() {

  const history = useHistory();

  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");
  const [nameCategory, setNameCategory] = useState();




//---------add question------------- 

	const handleSubmit = (e) => {
		e.preventDefault();


    // let ArrayincorrectAnswers = incorrectAnswers.split(",");

    const Question = {question,correctAnswer,incorrectAnswer1,incorrectAnswer2,incorrectAnswer3};

	axios.post(`http://localhost:8081/question/add`,Question)
          
		.then(res => {
		    if(res.error){
				return false
			}else{
        console.log(res.data);
         history.push('/questions')
			}
		 
		})
	}
// get all category and show it in select
  useEffect(()=>{

    axios.get(`http://localhost:8081/category`)
      .then(function (response) {
          
        setNameCategory(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    },[])
  return(
    
    <div className="container-xl">
  <form id="form" data-parsley-validate onSubmit={handleSubmit}>
    
        <h1>Add New Question</h1>
  
          <input className="form-control" id="name" type="text" 
          placeholder="Question" required 
          value={question}
          onChange={e => setQuestion(e.target.value)} />
        <br></br>
          <input className="form-control" id="name" type="text" placeholder="Correct Answer" required 
            value={correctAnswer}
            onChange={e => setCorrectAnswer(e.target.value)} />
        <br></br>
          <input className="form-control" id="name" type="text" placeholder="Incorrect Answer 1" required 
            value={incorrectAnswer1}
            onChange={e => setIncorrectAnswer1(e.target.value)} />
 <br></br>
             <input className="form-control" id="name" type="text" placeholder="Incorrect Answer 2" required 
            value={incorrectAnswer2}
            onChange={e => setIncorrectAnswer2(e.target.value)} />
 <br></br>
             <input className="form-control" id="name" type="text" placeholder="Incorrect Answer 3" required 
            value={incorrectAnswer3}
            onChange={e => setIncorrectAnswer3(e.target.value)} />
       
       <br></br>
       <select id="select" className="form-control">
       <option>Select Categories : </option>
             {nameCategory && nameCategory.map(item =>(
                <option  value={item._id}
                onChange={e => setNameCategory(e.target.value)}>{item.nameCategory}</option>
              ))}          
          </select>  
          <br></br>
        <button type="submit" id="AddCatg">Add Question</button>
        
      </form>
</div>

  )
}
export default AddQuestion;