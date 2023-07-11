// reducers
import { createAction } from 'redux-actions';
import { handleActions } from 'redux-actions';
const INC = 'INC';
const DEC = 'DEC';

export const inc = createAction(INC)
export const dec = createAction(DEC)

const initState = {
  num:100
}

export default handleActions(
  {
    [INC]:(state, action) => { 
      console.log('reducer');
      return ({num: state.num + 1}) 
    },
    [DEC]:(state, action) => ({num: state.num - 1})
  },
  initState
);
