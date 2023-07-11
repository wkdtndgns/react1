import React, { Component } from 'react';

class Fpp extends Component {
    render() {
        return (
            <div>
                <h1>Fpp</h1>
                <h1>{this.props.num}</h1>
            </div>
        );
    }
}

export default Fpp;