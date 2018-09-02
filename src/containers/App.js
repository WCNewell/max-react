import React, { PureComponent } from 'react';

// PureComponent automatically implements shouldComponentUpdate
// Only use PureComponent if you know updates might not be required
// Strategically place some PureComponent

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

export const AuthContext = React.createContext(false);

// import WithClass from '../hoc/WithClass'

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// import Radium, { StyleRoot }from 'radium';

// the whole idea behind this "container" is that it manages and manipulates the state
// this is an example of a "stateful component"
// access to state and lifecycle hooks
// Access State an Props via "this"

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        { id: 'dkdkd', name: 'Clark', age: 45 },
        { id: 'dshsh', name: 'Max', age: 28 },
        { id: 'djdjd', name: 'Stephi', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      '[UPDATE App.js] Inside getDerivedStateFromProps',
      nextProps,
      prevState
    )
    return prevState;
  }

  // use to save users scrolling positions before new list items are added
  getSnapshotBeforeUpdate() {
    console.log('[UPDATE App.js] Inside getSnapshotBeforeUpdate')
  }

  // use to scroll user back to thier positino after new list items have been added
  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate')
  }

  // this is more modern: in the past state showed up in the constructor
  // state = {
  //   persons: [
  //     { id: 'dkdkd', name: 'Clark', age: 45 },
  //     { id: 'dshsh', name: 'Max', age: 28 },
  //     { id: 'djdjd', name: 'Stephi', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

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
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
     const doesShow = this.state.showPersons;
     this.setState( (prevState, props) => {
       return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
       }
      })
  }

  loginHandler = () => {
    this.setState({ authenticated: true })
  }
  
  render() {
    console.log('[App.js] Inside render')
    let persons = null;

    if ( this.state.showPersons ) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
        <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            login={this.loginHandler}
            clicked={this.togglePersonsHandler} />
            <AuthContext.Provider value={this.state.authenticated}>
              { persons }
            </AuthContext.Provider>
        </Aux>
    )
    // what is happening under the hood: return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
