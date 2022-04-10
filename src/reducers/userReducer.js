

import { PUT_MAIN, PUT_PUZZLE, PUT_USER } from "../actions/accountActions";
// state = {
//     player: {
//         id: string,
//         name: string,
//         birthDate: string
//     },
//    puzzle: {
//         id: string,
//         numOfItems: string
//     },
//    main:{
//         id: string,
//         name: string,
//         missingItems:[]
// }
// }


const initialState = {
  user: {
    id: '',
    name: '',
    birthDate: ''
  },
  puzzle: {
    id: '',
    numOfItems: ''
  },
  main: {
    id: '',
    name: '',
    missingItems: []
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_MAIN:
      return { ...state, main: action.payload }
    case PUT_USER:
      return { ...state, user: action.payload }
    case PUT_PUZZLE:
      return { ...state, puzzle: action.payload }
    default:
      return state;
  }
}

