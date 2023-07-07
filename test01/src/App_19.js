//함수형 클래스
import React, { Component } from 'react';

class App extends Component {
    constructor(properties){
        super(properties);
        this.state = {num:100};
    }
    render() {
        return (
            <div>
                <Bpp tiger={'호랑이'}/>
            </div>
        );
    }
}

//함수형과 클래스 차이
/*
1. 생성자가 없다.
2. 전달되는 인수 props를 사용해야 한다. 받은 props는 비구조화 할당문법으로 변환한다. 
3. 라이프사이클이 없다. -> 가볍다. 
4. State가 없다. 하지만 사용가능하게끔 업데이트가 되었는데 hooks로 사용이 가능하다.
5. rend함수가 없다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/
function Bpp ({tiger}) {
    // console.log(props);
    // console.log(tiger2);
    // let {tiger} = props;

        return (
            <div>
                <h1>Bpp</h1>
                {/* <h1>{tiger}</h1> */}
                <h1>{tiger}</h1>
            </div>
        );
    
}


export default App;