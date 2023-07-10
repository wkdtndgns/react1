import React, { Component } from 'react';
import withF1 from './withF1';

class Cpp extends Component {
    render() {
        return (
            <div>
                <h1>코끼리1</h1>
                <h1>코끼리2</h1>
                <h1>코끼리3</h1>
            </div>
        );
    }
}

export default withF1(Cpp);