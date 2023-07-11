import React, { Component } from 'react';

export default function withF1(Hoc){
    return class CommonComponent extends Component{
    render(){
        return(
          <>
            <h1>목록</h1>
            <Hoc/>

          </>
        );
      }
  }
}
