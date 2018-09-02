import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux'

// this is an example of a "functional stateless component" because it's a function!
// these components have a narrow focus and responsibility
// no access to state or lifecycle hooks
// access props via "props"

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ')
    }
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', bold']
    }

    return (
        <Aux>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    );
};

export default cockpit;