import React from 'react';
import Notes from './Notes';
import findIndex from '../libs/find_index';
import uuid from 'node-uuid';

export default class App extends React.Component {
  render() {
    const notes = [
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
    ];

    return (
      <div>
        <Notes items={notes} />
      </div>
    );
  }
}