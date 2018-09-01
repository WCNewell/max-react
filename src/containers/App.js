import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Radium, { StyleRoot }from 'radium';

// the whole idea behind this "container" is that it manages and manipulates the state
// this is an example of a "stateful component"
// access to state and lifecycle hooks
// Access State an Props via "this"

class App extends Component {
  state = {
    persons: [
      { id: 'dkdkd', name: 'Clark', age: 45 },
      { id: 'dshsh', name: 'Max', age: 28 },
      { id: 'djdjd', name: 'Stephi', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = ( event, id  ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // alternative to above instead of using the spread operator: const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState( {persons: persons} )

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice() or the spread operator below

    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow})
  }
  
  render() {
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <div className={classes.App}>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          { persons }
        </div>
    )
    // what is happening under the hood: return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
