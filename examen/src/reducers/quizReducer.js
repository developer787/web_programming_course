import * as types from './action_types'
const initialState = {
      data : 42,
      quizCount: 0
}
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_QUIZ:
      const quizCount = state.quizCount + 1
      return Object.assign({}, state, {quizCount: quizCount})
    case types.CHANGE_TEXT:
      console.log('CHANGE_TEXT from HelloReducer')
      return Object.assign({}, state, {text: action.text})
      // case types.ADD_PERSON:
      //   return [...state, Object.assign({}, action.person)];
    case types.PLUS_FIVE:
      const dataPlusFive = state.data + 5
      return Object.assign({}, state, {data: dataPlusFive})
    case types.MINUS_FIVE:
      const dataMinusFive = state.data - 5
      return Object.assign({}, state, {data: dataMinusFive})
    default:
      return state
  }
}
