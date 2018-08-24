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

  switchNameHandler = () => {
    // console.log('Was clicked!')
    // Don't do this: this.state.persons[0].name = 'William'
    this.setState({
      persons: [
        { name: 'William', age: 22 },
        { name: 'Max', age: 29 },
        { name: 'Stephi', age: 26 }
      ]
  })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
