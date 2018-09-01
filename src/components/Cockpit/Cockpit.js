import React from 'react';
import classes from './Cockpit.css'

// this is an example of a "functional stateless component" because it's a function!
// these components have a narrow focus and responsibility
// no access to state or lifecycle hooks
// access props via "props"

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
    btnClass = classes.Red;
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
        <div className={classes.Cockpit}>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
          </div>
    );
};

export default cockpit;