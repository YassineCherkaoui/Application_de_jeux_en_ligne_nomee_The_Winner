import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import UserService from "../services/user.service";
import { Link } from 'react-router-dom';
export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const {customers, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const customerList = customers.map(customer => {
      return <tr key={customer._id}>
        <td style={{whiteSpace: 'nowrap'}}>{customer.firstname}</td>
        <td>{customer.lastname}</td>
        <td>{customer.age}</td>
        <td>{customer.address}</td>
        <td>
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/customers/" + customer._id}>Edit</Button>
            <Button size="sm" color="danger" onClick={() => this.remove(customer._id)}>Delete</Button>
          </ButtonGroup>
        </td>
      </tr>
});

    return (
      <div>
      <Container fluid>
        <div className="float-right">
          <Button color="success" tag={Link} to="/customers/new">Add Customer</Button>
        </div>
        <h3>Customer List</h3>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="auto">Categories</th>
              <th width="auto">Actions</th>
            </tr>
          </thead>
          <tbody>
          {/* {customerList} */}
          </tbody>
        </Table>
      </Container>
    </div>
    );
  }
}
