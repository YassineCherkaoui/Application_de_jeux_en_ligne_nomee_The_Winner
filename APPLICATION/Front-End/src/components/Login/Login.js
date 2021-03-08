import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './login.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Button } from 'reactstrap';

const Login = (props) => {

	const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {userName,password};

	axios.post(`http://localhost:8081/user/login`, user)
		.then(res => {
		    if(res.error){
				return false
				
			}else{
				// console.log(res.data.token);

				let token = res.data.token;
		
				localStorage.setItem("token", token);
				 console.log(res.data);

				 if(!token) {
					 alert('User name or password invalid !!!!! try again')
					return <Login/>
				  }else{
					props.history.push('/quiz')
				  }
	            
			}
		 
		})
	}
  return(

	<div className="col-md-12">
	<div className="card card-container">
	  <img
		src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
		alt="profile-img"
		className="profile-img-card"
	  />

	  <Form className="form"  onSubmit={handleSubmit}>
<div>
			<div className="form-group">
			  <label htmlFor="fname">Username</label>
			  <Input
				type="text"
				className="form-control"
				required 
				onChange={e => setUserName(e.target.value)}
			   	placeholder="Username"
			  />
			</div>

			<div className="form-group">
			  <label htmlFor="lname">Password</label>
			  <Input
				type="password"
				className="form-control"
				required data-parsley-no-focus
			 value={password}
			 onChange={e => setPassword(e.target.value)}
			 placeholder="Password"
			  />
			</div>
			
			<div className="form-group">
			  <button className="btn btn-primary btn-block"type="submit" id="login-button">Sign In</button>

			</div>
		  </div>
		
	  </Form>
	  <Button color="secondary" tag={Link} to="/register">Sign Up</Button>
	</div>
  </div>
  )
}
export default Login;