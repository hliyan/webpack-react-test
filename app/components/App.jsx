import React from 'react';
import Notes from './Notes';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.itemEdited = this.itemEdited.bind(this);

    this.state = {
      notes: [
        {
          task: 'Learn webpack'
        },
        {
          task: 'Learn React'
        },
        {
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
        <Notes
          items={notes}
          onEdit={this.itemEdited} />
      </div>
    );
  }

  addItem() {
    console.log('add item');
    this.setState({
    notes: this.state.notes.concat([{
        task: 'New task'
      }])
    });
  }

  itemEdited(i, task) {
    let notes = this.state.notes;

    notes[i].task = task;

    this.setState({
      notes: notes
    });
  }
}