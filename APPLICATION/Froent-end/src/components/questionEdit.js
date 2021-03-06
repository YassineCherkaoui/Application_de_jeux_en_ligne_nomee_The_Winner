



import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';


class QuestionEdit extends Component {

  emptyQuestion = {
    categorie_name: ''
  };

  constructor(props) {
    super(props);
    this.state = {Categories: [],
      item: this.emptyQuestion};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
      const Question = await (await fetch(`/api/Question/${this.props.match.params.id}`)).json();
      this.setState({item: Question});
    }




    fetch('http://localhost:8080/api/Categories')
      .then(response => response.json())
      .then(data => this.setState({Categories: data}));
  }
  // componentDidMount() {
  //   this.setState({isLoading: true});


  // }


  

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('/api/Question', {
      method: (item._id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/qstadd');
  }
  









  render() {
    const {item,Categories} = this.state;
    const title = <h2>{item.id ? 'Edit Question' : 'Add Question'}</h2>;

    // const [setCategory] = useState();

    // const {Questions} = this.state;








    
    return (<div>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label for="Cateogory">Categorie</Label>
            {/* <Input type="text" name="Cateogory" id="Cateogory" value={item.Cateogory || ''}
                   onChange={this.handleChange} autoComplete="Cateogory"/> */}
                       <select id="select" class="form-control" name="Cateogory" id="Cateogory" onChange={this.handleChange} autoComplete="Cateogory">
                       <option value="">Categories</option>
                       {Categories.map((Categorie, ) => ( 
                        <option  value={Categorie.categorie_name || ''}>{Categorie.categorie_name}</option>
              ))}          
          </select>  
          </FormGroup> 
          <FormGroup>
            <Label for="main_question">Question</Label>
            <Input type="text" name="main_question" id="main_question" value={item.main_question || ''}
                   onChange={this.handleChange} autoComplete="categorie_name"/>
          </FormGroup>    
          <FormGroup>
            <Label for="anser_quesion">Answer</Label>
            <Input type="text" name="anser_quesion" id="anser_quesion" value={item.anser_quesion || ''}
                   onChange={this.handleChange} autoComplete="anser_quesion"/>
          </FormGroup> 
          <FormGroup>
            <Label for="anser_quesion">IncorrecAnser</Label>
            <Input type="text" name="incorrect1" id="incorrect1" value={item.incorrect1 || ''}
                   onChange={this.handleChange} autoComplete="incorrect1"/>
          </FormGroup> 
          <FormGroup>
            <Label for="anser_quesion">IncorrecAnser</Label>
            <Input type="text" name="incorrect2" id="incorrect2" value={item.incorrect2 || ''}
                   onChange={this.handleChange} autoComplete="incorrect2"/>
          </FormGroup> 
          <FormGroup>
            <Label for="anser_quesion">IncorrecAnser</Label>
            <Input type="text" name="incorrect3" id="incorrect3" value={item.incorrect3 || ''}
                   onChange={this.handleChange} autoComplete="incorrect3"/>
          </FormGroup> 
          <FormGroup>
            <Button color="primary" type="submit">Save</Button>{' '}
            <Button color="secondary" tag={Link} to="/qstadd">Cancel</Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
    )
  }
}

// export default withRouter(QuestionEdit);

export default QuestionEdit;
