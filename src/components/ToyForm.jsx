import React, { Component } from 'react';

class ToyForm extends Component {
// create the state for the form object
state = {
  name: "",
  image: "",
  likes: 10
}

//create the change handler
changeHandler = (e) => {
  e.persist()
  this.setState(() => ({
    [e.target.name] : e.target.value
  }))
}

//create a submit handler
submitHandler = (e) => {
  e.preventDefault()
  this.props.submit(this.state)
}

  render() {
    return (
      <div className="container" onSubmit={this.submitHandler}>
        <form className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text" value={this.state.name} onChange={this.changeHandler}/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" value={this.state.image} onChange={this.changeHandler}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
