export default function reducer(state={
    user: {},
    userData: {},
    firebase: {},
    pending: false,
    error: null,
  }, action) {
    switch (action.type) {
      case 'SET_FIREBASE': {
        return {...state, firebase: action.payload}
      }
      case 'UPDATE_USER': {
        return {...state, user: action.payload, pending: false}
      }
      case 'SET_USER_DATA_FULFILLED': {
        return {...state, userData: action.payload.data}
      }
      case 'UNSET_USER': {
        return {...state, user: {}}
      }
      case 'USER_LOGIN_PENDING': {
        return {...state, pending: true}
      }
      case 'USER_LOGIN_REJECTED': {
        return {...state, error: action.payload}
      }
      default: {
        return state
      }
    }
}