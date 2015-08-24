import React from 'react';
import Input from './ui';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Input label="name" value="" onKeyPress={this.onKeyPress} />
            </div>
        );
    }

    onKeyPress(e) {
        if (e.key == 'Enter') {
            alert(e.target.value);
        }
    }
}