import React from 'react';
import Notes from './Notes';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderNote = this.renderNote.bind(this);
  }

  render() {
    const notes = [{ task: 'Learn webpack'}, 
        { task: 'Learn React' }, 
        { task: 'Do laundry' }
    ];

    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}