import React, { useState } from 'react';
import { Link,useHistory } from "react-router-dom";
import axios from 'axios';
import './login.css';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { Button } from 'reactstrap';
const Register = () => {

 const history = useHistory();

	const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
	const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

	const user = {firstName,lastName,userName,email,password};

	axios.post(`http://localhost:8081/user/authentication`, user)
		.then(res => {
		    if(res.error){
				return false
			}else{
				
				 console.log(res.data);
	             history.push('/login')
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
			  <label htmlFor="fname">First Name</label>
			  <Input
				type="text"
				className="form-control"
				required data-parsley-no-focus
				value={firstName}
				 onChange={e => setFirstName(e.target.value)}
				  placeholder="YASSINE"
			  />
			</div>

			<div className="form-group">
			  <label htmlFor="lname">Lastname</label>
			  <Input
				type="text"
				className="form-control"
				required data-parsley-no-focus
			 value={lastName}
			  onChange={e => setLastName(e.target.value)}
			   placeholder="CHERKAOUI"
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="lname">UserName</label>
			  <Input
				type="text"
				className="form-control"
				required data-parsley-no-focus
				value={userName}
				 onChange={e => setUserName(e.target.value)}
				  placeholder="UserName"
			  />
			</div>
			<div className="form-group">
			  <label htmlFor="lname">Email</label>
			  <Input
				type="email"
				className="form-control"
				 required data-parsley-no-focus
				value={email}
				 onChange={e => setEmail(e.target.value)}
				  placeholder="Email"
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
			  <button className="btn btn-primary btn-block"type="submit" id="login-button">Sign Up</button>

			</div>
		  </div>
		
	  </Form>
	  <Button color="secondary" tag={Link} to="/login">Sign In</Button>
	</div>
  </div>
  )
}
export default Register;