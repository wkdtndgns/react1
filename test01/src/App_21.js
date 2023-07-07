import React, { Component, Fragment } from 'react';

//Return은 무조건 하나의 부모만. 
//Fragment 사용이유
//기본적으로 제공되는 div를 사용할 경우 tag가 깊어진다. 
//<><>로 적을 수 있다(Fragment 명시하는 대신)
class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>tiger</h1>
                <Bpp></Bpp>
            </Fragment>
        );
    }
}

class Bpp extends Component {
    render() {
        return (
            <>
                <h1>Bpp</h1>       
            </>
        );
    }
}


export default App;