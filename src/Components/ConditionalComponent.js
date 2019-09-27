import React, { Component } from 'react';

class ConditionalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        let message = '';
        if (this.state.isLoggedIn) {
            message = 'Hello Chinmay'
        } else {
            message = 'Hello Guest'
        }
        
        return (
            <div>
                {message}
            </div>
        );
    }
}

export default ConditionalComponent;
