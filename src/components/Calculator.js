import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadButtons,
  loadClear,
  loadBackspace,
  loadOutput
} from '../redux/calculatorRedux/calculator.actions';
import { CALCULATOR_KEY } from '../redux/calculatorRedux/calculator.reducer';

const notes =
  'To add: \n + be able to use product of operations as input wtf. \n+ user ability to edit theme (5 premade and ability to add 2 more) \n + + toggle "save calculations" mode w/library \n \n  ';

// view store
// useDispatch & useSelector are both used to connect a React component to the Redux store in the app
const Calculator = () => {
  const dispatch = useDispatch();

  const viewCalculator = useSelector((state) => {
    return state[CALCULATOR_KEY];
  });

  return (
    <React.Fragment>
      <section>
        <div className="calculator-container">
          {/* input window */}
          <div className="input-container">
            <input
              type="text"
              placeholder="0"
              value={
                viewCalculator.output.length === 0
                  ? viewCalculator.number
                  : viewCalculator.output
              }
              className="input-field"
            />
          </div>

          {/* keypad */}
          <div className="keypad-container">
            <button
              onClick={() => dispatch(loadButtons('+'))}
              className="calc-button-func"
            >
              +
            </button>

            <button
              onClick={() => dispatch(loadButtons(9))}
              className="calc-button"
            >
              9
            </button>
            <button
              onClick={() => dispatch(loadButtons(8))}
              className="calc-button"
            >
              8
            </button>
            <button
              onClick={() => dispatch(loadButtons(7))}
              className="calc-button"
            >
              7
            </button>
            <button
              onClick={() => dispatch(loadClear())}
              className="calc-button-2h"
            >
              CLR
            </button>

            <button
              onClick={() => dispatch(loadButtons('-'))}
              className="calc-button-func"
            >
              -
            </button>

            <button
              onClick={() => dispatch(loadButtons(6))}
              className="calc-button"
            >
              6
            </button>
            <button
              onClick={() => dispatch(loadButtons(5))}
              className="calc-button"
            >
              5
            </button>
            <button
              onClick={() => dispatch(loadButtons(4))}
              className="calc-button"
            >
              4
            </button>
            <button
              onClick={() => dispatch(loadButtons('*'))}
              className="calc-button-func"
            >
              *
            </button>
            <button
              onClick={() => dispatch(loadButtons(3))}
              className="calc-button"
            >
              3
            </button>

            <button
              onClick={() => dispatch(loadButtons(2))}
              className="calc-button"
            >
              2
            </button>
            <button
              onClick={() => dispatch(loadButtons(1))}
              className="calc-button"
            >
              1
            </button>

            <button
              onClick={() => dispatch(loadButtons('-'))}
              className="calc-button-func"
            >
              neg
            </button>
            <button
              onClick={() => dispatch(loadButtons('/'))}
              className="calc-button-func"
            >
              /
            </button>

            <button
              onClick={() => dispatch(loadButtons(0))}
              className="calc-button"
            >
              0
            </button>

            <button
              onClick={() => dispatch(loadButtons('.'))}
              className="calc-button-func"
            >
              .
            </button>

            <button
              onClick={() => dispatch(loadBackspace())}
              className="calc-button-func"
            >
              bksp
            </button>

            <button
              onClick={() => dispatch(loadButtons('+'))}
              className="calc-button-func"
            >
              pos
            </button>
            <button
              onClick={() => dispatch(loadOutput('='))}
              className="calc-button-2w"
            >
              =
            </button>
          </div>

          <div className="notes">
            {notes}
            testing below:
            <pre>{JSON.stringify(viewCalculator)}</pre>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Calculator;
