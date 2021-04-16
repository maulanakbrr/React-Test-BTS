import axios from 'axios';
import UserActionsTypes from './user.types';

export const userLoginStart = () => ({
  type: UserActionsTypes.USER_LOGIN_START
});

export const userLoginSuccess = user => ({
  type: UserActionsTypes.USER_LOGIN_SUCCESS,
  payload: user
});

export const userLoginFail = errorMessage => ({
  type: UserActionsTypes.USER_LOGIN_FAIL,
  payload: errorMessage
});

export const userLogout = () => ({
  type: UserActionsTypes.USER_LOGOUT
});

export const userLoginStartAsync = (username, password) => async (dispatch) => {
  try {
    dispatch(userLoginStart())
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post('http://18.139.50.74:8080/login', { username, password }, config)

    dispatch(userLoginSuccess(data))
    
  } catch (error) {
    dispatch(userLoginFail(
      error.response && error.response.data.message ? error.response.data.message : error.message
    ))
  }
};

export const userRegisterStart = () => ({
  type: UserActionsTypes.USER_REGISTER_START
})

export const userRegisterSuccess = user => ({
  type: UserActionsTypes.USER_REGISTER_SUCCESS,
  payload: user
})

export const userRegisterFail = errorMessage => ({
  type: UserActionsTypes.USER_REGISTER_FAIL,
  payload: errorMessage
})

export const userRegisterStartAsync = ( userCredentials) => async (dispatch) => {
  try {
    
    const { username, email, password } = userCredentials

    dispatch(userRegisterStart())
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(`http://18.139.50.74:8080/register`,{ username, email, password }, config)

    dispatch(userRegisterSuccess(data))
    
  } catch (error) {
    dispatch(userRegisterFail(
      error.response && error.response.data.message ? error.response.data.message : error.message
    ))
  }
}