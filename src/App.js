import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component {

  state = {
    display: false,
    toys: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        toys: data
      })
    })
  }

  getCharacters = () => {
    fetch('http://localhost:3000/toys')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        toys: data
      })
    })
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  handleSubmit = (formData, event) => {
    event.preventDefault()
    fetch('http://localhost:3000/toys', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => 
      this.setState((prevState) => {
      return{ 
          display: false,
          toys: [...prevState.toys, data
          ]
        }
      })
    )
  }

  deleteCharacter = id => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(() => {
      this.getCharacters()
    })
  }

  // shouldComponentUpdate(previousState, nextState) {
  //   return this.state.toys.length !== nextState.toys.length ? true : false
  // } 
 

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm handleSubmit={this.handleSubmit} />
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} deleteCharacter={this.deleteCharacter} />
      </>
    );
  }

}

export default App;
