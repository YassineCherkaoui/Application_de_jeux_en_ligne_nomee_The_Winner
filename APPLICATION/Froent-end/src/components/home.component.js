import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
<div class="container">
  <div class="jumbotron">
    <h1>Welcome to The Winning</h1>      
    <p>The winning is the best compition for you Start developping your self by Click ON 'START'</p>
    <Link to={"/user"} className="btn btn-outline-primary">START</Link>
    
  </div> 
</div>
    );
  }
}
