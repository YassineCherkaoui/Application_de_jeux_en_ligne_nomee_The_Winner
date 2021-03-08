import React, { useState,useEffect} from 'react';
import {useHistory } from "react-router-dom";
// import Select from 'react-select';
import axios from 'axios';

import './dashboard.css';





function EditQuestion() {

  const history = useHistory();
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");
  const [, setNameCategory] = useState("");

  const [categories, setNameCategories] = useState(null);

  const idQts=localStorage.getItem('idQuestion');

// ---------------------get question to update-----------------------------
   useEffect(()=>{

    axios.get(`http://localhost:8081/question/${idQts}`)
    .then(function (response) {
     
      setQuestion(response.data.question)
      setCorrectAnswer(response.data.correctAnswer)
      setIncorrectAnswer1(response.data.incorrectAnswer1)
      setIncorrectAnswer2(response.data.incorrectAnswer2)
      setIncorrectAnswer3(response.data.incorrectAnswer3)
      setNameCategory(response.data.nameCategory)
      // const [, setNameCategory] = useState("");
    
    }).catch(function (err) {
      console.log(err);
  });
  
  })
// -----------------------update question---------------------------
	const handleSubmit = (e) => {
		e.preventDefault();

    const data = {question,correctAnswer,incorrectAnswer1,incorrectAnswer2,incorrectAnswer3};

    axios.put(`http://localhost:8081/question/update/${idQts}`,data)
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
        
      setNameCategories(response.data)
    
    }).catch(function (err) {
      console.log(err);
  });
  
  },[])






  return(
    
    <div className="container-xl">

   <form id="form" data-parsley-validate onSubmit={handleSubmit}>
    
        <h1>Edit Question</h1>
        <label htmlFor="fname">Question</label>
          <input className="form-control" id="name" type="text" 
          placeholder="Question" required 
          value={question}
          onChange={e => setQuestion(e.target.value)} />
              <br></br>
              <label htmlFor="fname">correctAnswer</label>
          <input className="form-control" id="name" type="text" placeholder="Correct Answer" required 
            value={correctAnswer}
            onChange={e => setCorrectAnswer(e.target.value)} />
              <br></br>
              <label htmlFor="fname">incorrectAnswer1</label>
              <input className="form-control" id="name" type="text" placeholder="INCorrect Answer" required 
            value={incorrectAnswer1}
            onChange={e => setIncorrectAnswer1(e.target.value)} />
          {/* <input className="form-control" id="name" type="text" placeholder="Incorrect Answer" required 
            value={incorrectAnswer1}
            onChange={e => setIncorrectAnswer1(e.target.value)} /> */}
              <br></br>
              <label htmlFor="fname">incorrectAnswer2</label>
              <input className="form-control" id="name" type="text" placeholder="Incorrect Answer 2" required 
            value={incorrectAnswer2}
            onChange={e => setIncorrectAnswer2(e.target.value)} />
 <br></br>
 <label htmlFor="fname">incorrectAnswer3</label>
             <input className="form-control" id="name" type="text" placeholder="Incorrect Answer 3" required 
            value={incorrectAnswer3}
            onChange={e => setIncorrectAnswer3(e.target.value)} />
             <br></br>
             <label htmlFor="fname">Categories</label>
       {/* <select id="select" className="form-control">
       <option>Select Categories : </option>
             {categories && categories.map(item =>(
                <option  value={item._id}
                onChange={e => setNameCategory(e.target.value)}>{item.nameCategory}</option>
              ))}          
          </select>  */}
           <select id="select" className="form-control">
       <option>Select Categories : </option>
             {categories && categories.map(item =>(
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
export default EditQuestion;