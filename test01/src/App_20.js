
//rsf: 함수형 바로 정의하기
import React, { useEffect, useState } from 'react';

function App(props) {
    //rabbit이라는 state변수를 만들고 100을 할당!
    //rabbit을 변경시킬 때에는 setRabbit을 호출하겠다. 
    let[rabbit, setRabbit] = useState(100); // hooks함수. 숫자뿐만 아니라 객체도 넣을수있다.
    let f1 = function(){
        setRabbit(rabbit + 1);
    } 
    let f2 = function(){
        setRabbit(rabbit - 1);
    } 
    return (
        <div>
            <h1>App</h1>
            <h1>{rabbit}</h1>
            <button onClick={f1}>Check</button><br/>
            <button onClick={f2}>Check2</button>
            <Bpp></Bpp>
        </div>
    );
}

function Bpp(props) {
    let [value, setValue] = useState(100);
    return (
        <div>
            <h1>Bpp</h1>
            <h1>{value}</h1>
            <button onClick={()=>{setValue(value + 1)}}>BppButton</button>
            <button onClick={()=>{setValue(value - 1)}}>BppButton2</button>
            <Cpp></Cpp>

        </div>
    );
}

//useEffect: componenetDidMount 대용으로 사용할 수 있다. 
function Cpp(props) {
    console.log(1);
    useEffect(()=>{console.log(3);}) // Rendering이 끝나고 호출이 된다. 
    console.log(2);
    return (
        <div>
            <h1>Cpp</h1>
        </div>
    );
}

export default App;