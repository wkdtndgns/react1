//npm install --save bootstrap
//npm install --save reactstrap
//https://reactstrap.github.io/?path=/docs/components-alert--alert
//https://mui.com/
import React, { Component } from 'react';
import {Alert} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
class App extends Component {
    render() {
        return (
            <div>
                <Alert color="primary">
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="secondary">
                    This is a primary alert — check it out!
                </Alert>
                <Alert>
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="danger">
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="warning">
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="info">
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="light">
                    This is a primary alert — check it out!
                </Alert>
                <Alert color="dark">
                    This is a primary alert — check it out!
                </Alert>     
        </div>
        );
    }
}

export default App;