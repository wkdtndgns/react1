import React, { Component } from 'react';

class App extends Component {
    render() {
        let ar = [
        <li key='1'>하이</li>, //key를 넣어주지 않으면 에러, 경고가 뜬다. 
        <li key='2'>리이</li>, //유일한 값으로 넣어주자. 
        <li key='3'>히이</li>,
    ]

    let br = ['소나무', '중나무', '대나무'];
        return (
            <div>
                <h1>App</h1>
                <ul>
                    {ar}
                </ul>
                <ul>
                    {ar.map(v => v)}
                </ul>
                <ul>
                    {br.map((v, i)=><li key={i}>{i + v}</li>)}
                </ul>
                <Bpp ar={ar} br={br}></Bpp>
            </div>
        );
    }
}


class Bpp extends Component {
    render() {
        let {ar, br} = this.props;
        return (
            <div>
                <h1>Bpp</h1>
                <ul>
                    {ar.map(v=>v)}
                </ul>
                <ul>{br.map((v,i) => {return <li key={i}>{v}</li>})}</ul>
                
            </div>
        );
    }
}

export default App;