import React from 'react';
import Field from './swisher-ui';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Field label="name" value="joe" onKeyPress={this.onKeyPress} />
            </div>
        );
    }

    onKeyPress(e) {
        if (e.key == 'Enter') {
            alert(e.target.value);
        }
    }
}