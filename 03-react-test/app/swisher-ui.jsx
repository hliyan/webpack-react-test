import React from 'react';

export default class Field extends React.Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type="text" 
                    defaultValue={this.props.value} 
                    onKeyPress={this.props.onKeyPress}
                    />
            </div>
        );
    }
}