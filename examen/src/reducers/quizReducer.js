import * as types from './action_types'
const initialState = {
      data : 42
}
export default (state = initialState, action = {}) => {
  switch (action.type) {
      // case types.ADD_PERSON:
      //   return [...state, Object.assign({}, action.person)];
    case types.ADD_FIVE:
      return state + 5
    default:
      return state
  }
}
