import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

// import data from './data'


class App extends React.Component{

  // componentDidMount to fetch the data, state will have an empty array first
  state = {
    display: false,
    toys: []
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  //fetch data from api
  componentDidMount() {
    fetch("http://localhost:3000/toys")
    .then(response => response.json())
    .then(data => this.setState(() => ({toys: data})))
  }



  //create a submit handler for the Toy Form, pass in the new created object as an argument
  submitHandler = (obj) => {
    // console.log(obj)
    let newToys = [...this.state.toys, obj]
    this.setState({
      toys: newToys
    })
  }


  //create a like handler for each toy object
  likeHandler = (toy) => {
    toy.likes++
    console.log(toy.likes)
    const options = {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ likes: toy.likes })
    }

    fetch('http://localhost:3000/toys/' + `${toy.id}`, options)
      .then(resp => resp.json())
      .then(toyObj => {
        let newArray = this.state.toys
        let foundToy = newArray.find(el => el.id === toy.id)
        newArray[newArray.indexOf(foundToy)] = toyObj
        this.setState(() => ({ toys: newArray }))
      })
  }

  //create a donate Handler so that a toy can be removed from the DOM
      //it will take the id the object as a paramter
  donateHandler = (id) => {
    fetch('http://localhost:3000/toys/' + `${id}`, {method: "DELETE"})

    //find the specific toy from the data array
    let toy = this.state.toys.find(toy => toy.id === id)
    let newArray = [...this.state.toys]
    newArray.splice(newArray.indexOf(toy), 1) //this will find the toy at the specific index, and just remove that 1 object
    this.setState({toys: newArray})
  }

  render(){
    // console.log(this.state.toys)
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm submit={this.submitHandler} toys={this.state.toys}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} likeHandler={this.likeHandler} donateHandler={this.donateHandler}/>
      </>
    );
  }

}

export default App;
