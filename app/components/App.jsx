import React from 'react';
import Notes from './Notes';
import findIndex from '../libs/find_index';
import uuid from 'node-uuid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);

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
        <Notes items={notes} />
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
}