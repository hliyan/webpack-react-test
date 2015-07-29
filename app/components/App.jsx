import React from 'react';
import Note from './Note';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderNote = this.renderNote.bind(this);
  }

  render() {
    const notes = [
      {
        task: 'Learn webpack'
      },
      {
        task: 'Learn React'
      },
      {
        task: 'Do laundry'
      }
    ];

    return (
      <div>
        <ul>{notes.map(this.renderNote)}</ul>
      </div>
    );
  }
  
  renderNote(note, i) {
    return (
      <li key={`note${i}`}>
        <Note value={note.task} />
      </li>
    );
  }
}