/* 

"A Reducer is a pure function that takes the state of 
an application and action as arguments and returns 
a new state."


*/
import {
  LOAD_BACKSPACE,
  LOAD_OUTPUT,
  LOAD_CLEAR,
  LOAD_BUTTONS
} from './calculator.actionTypes';

export const CALCULATOR_KEY = 'calculatorStore';

let initialState = {
  number: '',
  output: ''
};

export const calculatorReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case LOAD_BUTTONS:
      return {
        ...state,
        ...payload,
        number: state.number.concat(action.payload)
      };

    case LOAD_OUTPUT:
      try {
        return {
          ...state,
          ...payload,
          output: eval(state.number).toString() // takes expoutputsion as string and outputs to console
          //!!! USING EVAL() ISNT SAFE, USE FUNCTION() HOW TF DO YOU USE IT IN THIS CASE THO?
        };
      } catch (error) {}
      return {
        ...state,
        ...payload,
        output: 'error'
      };

    case LOAD_CLEAR:
      return {
        ...state,
        ...payload,
        number: '',
        output: ''
      };

    case LOAD_BACKSPACE:
      return {
        ...state,
        ...payload,
        number: state.number.slice(0, -1),
        output: ''
      };

    default:
      return state;
  }
};
