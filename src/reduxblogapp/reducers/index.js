import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
  posts: postsReducer,
  users: usersReducer
});

// ====Reducer Rules ==================
// ---Reducer cannot return 'undefined' value
// ---No API calls, no side effects:
// ---Reducer takes in prev state and updates it based on an action.
// ---Does not MUTATE state.

// ---Examples on updating state:

// Removing an element/property:
// state.filter(ele => ele == blah) or { ...state, age: undefined } or _.omit(state, 'age')
// NOT state.pop() or delete state.name

// Adding an element/property:
// [...state, 3] or {...state, age: 30}
// NOT state.push(3) or state.age = 30

// Updating an element/property:
// state.map(ele => ele === 'hi' ? 'bye' : ele) or {...state, name: 'Sam'}
// NOT state[0] = 'hi' or state.name = 'Sam'
