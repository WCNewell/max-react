import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Clark', age: 45 },
      { name: 'Max', age: 28 },
      { name: 'Stephi', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!')
    // Don't do this: this.state.persons[0].name = 'William'
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: 'Max', age: 29 },
        { name: 'Stephi', age: 26 }
      ]
    })
  } 

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Will', age: 22 },
        { name: event.target.value, age: 29 },
        { name: 'Stephi', age: 26 }
      ]
    } )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('William!!')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Will!')}
          changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
