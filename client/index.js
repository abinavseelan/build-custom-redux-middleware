import { createStore } from 'redux';

const reducer = (state, action) => {
  let newState;

  if (action.type === 'INC') {
    newState = state + action.payload;
  }

  return newState;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Store Changed!");
})
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
store.dispatch({ type: "INC", payload: 1 });
