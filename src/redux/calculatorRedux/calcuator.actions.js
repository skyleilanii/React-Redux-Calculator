// Redux action has to be a plain OBJECT with a STRING actionType
// a redux action is a payload of information
// payload is where you name the
// property that holds the actual data in a redux action object

import {
  LOAD_BACKSPACE,
  LOAD_OUTPUT,
  LOAD_CLEAR,
  LOAD_BUTTONS
} from './calculator.actionTypes';

export const loadOutput = (number) => {
  return {
    type: LOAD_OUTPUT,
    payload: number
  };
};

export const loadButtons = (number) => {
  return {
    type: LOAD_BUTTONS,
    payload: number
  };
};

export const loadClear = (number) => {
  return {
    type: LOAD_CLEAR,
    payload: number
  };
};

export const loadBackspace = (number) => {
  return {
    type: LOAD_BACKSPACE,
    payload: number
  };
};

export const loadMR = (number) => {
  return {
    type: LOAD_MR,
    payload: number
  };
};
