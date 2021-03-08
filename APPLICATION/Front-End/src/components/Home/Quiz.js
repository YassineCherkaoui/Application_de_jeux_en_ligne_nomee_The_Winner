import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import './quiz.css';


const Quiz = () => {


  const [categories , setCategories] = useState(null);

  useEffect(()=>{
  
    axios.get(`http://localhost:8081/category`)
      .then(function (response) {
       
     
        setCategories(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })





  return(
    
    <div id="home">
{/*       
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Page 1-1</a></li>
          <li><a href="#">Page 1-2</a></li>
          <li><a href="#">Page 1-3</a></li>
        </ul>
      </li>
      <li><a href="#">Page 2</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
    </ul>
  </div>
</nav> */}
    <form>
     <Link to="/home" className="play-button" style={{marginLeft: '1600px',marginTop: '22px'}}>log out</Link>
 </form>       
 <h2>Welcome </h2>

<h3>Choice Category to Start Game</h3>
 <form>
   
          
   { categories && categories.map(item =>(
     <div>

     <button>{item.nameCategory}</button>
     <br></br>
     <br></br>
     </div>
     
       ))} 


 
  </form>

</div>
    );
  }

export default Quiz;