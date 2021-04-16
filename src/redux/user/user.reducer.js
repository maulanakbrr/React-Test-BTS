import UserActionsTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null
}

export const userLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.USER_LOGIN_START:
      return { ...state, loading: true }
    case UserActionsTypes.USER_LOGIN_SUCCESS:
      return { ...state, loading: false, currentUser: action.payload }
    case UserActionsTypes.USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload }
    case UserActionsTypes.USER_LOGOUT:
      return { currentUser: null }
    default:
      return state
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionsTypes.USER_REGISTER_START:
      return { ...state, loading: true, isCreated: null }
    case UserActionsTypes.USER_REGISTER_SUCCESS:
      return { ...state, loading: false, isCreated: action.payload }
    case UserActionsTypes.USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}