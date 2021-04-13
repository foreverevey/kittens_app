import kittenData from '../data/kittenData';

// Action Types

export const DATA_LOADED = 'DATA_LOADED'

// Action Creators

export function getData(data) {
  console.log('calling get data');
  return {
    type: DATA_LOADED,
    payload: data
  }
}
// reducer

const initialState = [];

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return action.payload
    default:
      return state
  }
}

export default mainReducer
