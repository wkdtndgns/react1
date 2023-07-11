import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {inc,dec} from '../reducers/bpp'
import Bpp from '../component/Bpp'

// connect( hooks )
const BppContainer = () => {
    const num = useSelector( 
      state => { 
        console.log('state');
        return state.num;
    } );
  
    const dispatch = useDispatch();
    return (
      <Bpp num={num}
        onInc={
          ()=> { 
            console.log('dispatch');
            return dispatch(inc()) 
          }
        }
        onDec={()=>dispatch(dec())}
      />
    )
  };


  export default BppContainer