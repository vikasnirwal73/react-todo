import { createStore } from 'redux';
import todoReducer  from './reducers/todo-reducers';
import visibilityReducers from './reducers/visibility-reducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    todos:todoReducer,
    visibilityFilter:visibilityReducers
})


const store = createStore(allReducers);


store.subscribe(() => {
    console.log(store);
})

export default store;