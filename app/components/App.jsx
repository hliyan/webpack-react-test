import React from 'react';
import Notes from './Notes';
import findIndex from '../libs/find_index';
import uuid from 'node-uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.itemEdited = this.itemEdited.bind(this);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn webpack'
        },
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <Notes items={notes} onEdit={this.itemEdited} />
      </div>
    );
  }

  addItem() {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New task'
      }])
    });
  }

  itemEdited(noteId, task) {
    let notes = this.state.notes;
    const noteIndex = findIndex(notes, 'id', noteId);

    if(noteIndex < 0) {
      return console.warn('Failed to find note', notes, noteId);
    }

    notes[noteIndex].task = task;
    this.setState({notes});
  }
}