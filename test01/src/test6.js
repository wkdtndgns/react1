import React, { Component } from 'react';

class App extends Component {
 
  f1(){
    let s1 = 'tiger';
    let s2 = 'lion';
    console.log(`${s1} and ${s2}`);
    let s3 = '무궁화 꽃이 피었습니다.';
    console.log(s3.startsWith('무궁화'))
    console.log(s3.startsWith('궁화꽃'))
    console.log(s3.includes('꽃')) 
    console.log(s3.includes('나무')) 
    console.log(s3.endsWith('습니다.')) 
  }
  
  f2(){
    var a = 'tgier';
    var a = 'lion';
    let b = 'tiger';
    // let b = 'lion';
    
    { var c = 3; } console.log(c);
     { let d = 3; } 
    //  console.log(d);
  
    const e =3 ;
    // e = 4;
    let f1 = () => { };
    f1 = () => {};

    const f2 = () => { };
    // f2 = () =>{};
  }

  f3(){
    let ar = [1,2];
    let br = [3,4];
    let cr = [...ar,...br];
    console.log(1,typeof cr);

    let dr = [5,6,7,8]
    let [a,b, ...c ] = dr; 
    console.log(2,a,b,c);

    let t1 = {a:1,b:2};
    let t2 = {c:3,d:4};
    let t3 = Object.assign(t1,t2);
    let t4 = {...t1,...t2};
    console.log(3,t4);

    let er = ['tiger','lion'];
    let fr = ['dog','cat'];
    console.log(er.concat(fr))
    console.log([].concat(er,fr));
  
    let t5 = {a:1,b:2};
    let t6 = {a:1,b:2};
    console.log(44, Object.assign(t5,t6));
    console.log(44, Object.assign({},t5,t6));
    console.log(44, Object.assign([],t5,t6))
    let t7 = Object.assign([],t5,t6);
    console.log(t7);
    
  }

  render() {
    this.f3();
    return (
      <div>
        <h1>tiger</h1> 
        <br/>
        <button onClick={this.f1 }>버튼</button>
        <br/>
        <button onClick={this.f3 }>버튼3</button>  
      </div>
    );
  }
}

export default App;