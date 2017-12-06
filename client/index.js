// Let's build a Redux middleware! 🚀
import { createStore, applyMiddleware } from 'redux';

const defaultState = {
  todos: [],
  error: ''
}

const reducer = (state = defaultState, action) => {
  let newState;

  switch (action.type) {

    case 'ADD_TODO': {
      newState = Object.assign({}, state, {
        todos: action.payload.todos
      });

      break;
    }

    case 'TODO_ERROR': {
      newState = Object.assign({}, state, {
        error: action.payload.error
      });

      break;
    }

    default: {
      newState = Object.assign({}, state);
    }
  }

  return newState;
}

const errorLogger = store => next => action => {
  if ((/[A-Z]*_ERROR/i).test(action.type) || action.payload.error) {
    console.group("Error Occured");
    console.log("We can upload this error report to our error logging service!");
    console.log("Action: ", action);
    console.log("Store State: ", store.getState());
    console.groupEnd();
  }

  next(action);
};

const middleware = applyMiddleware(errorLogger);

const store = createStore(reducer, middleware);

store.dispatch({ type: 'ADD_TODO', payload: { todos: [] }});
store.dispatch({ type: 'TODO_ERROR', payload: { error: 'Oops. Something happened!' }});
store.dispatch({ type: 'ADD_TODO', payload: { error: 'Oops. Something happened!' }});
