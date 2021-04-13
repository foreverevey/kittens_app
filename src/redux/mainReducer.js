import kittenData from '../data/kittenData';

// Action Types

export const DATA_LOADED = 'DATA_LOADED'
export const DATA_AMOUNT = 'DATA_AMOUNT'

// Action Creators

export function getData(kittens, showKittens) {
  return {
    type: DATA_LOADED,
    payload: { kittens, showKittens }
  }
}

export function updateAmount(showKittens) {
  return {
    type: DATA_AMOUNT,
    payload: showKittens
  }
}

// reducer

const initialState = {
  kittens: [],
  showKittens: [],
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
      return {showKittens: action.payload.showKittens, kittens: action.payload.kittens}
    case DATA_AMOUNT:
      return {...state, showKittens: action.payload}
    default:
      return state
  }
}

export default mainReducer
