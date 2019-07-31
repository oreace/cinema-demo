// import { createActions } from 'reduxsauce';
import userController from '../../controllers/user/userController';
import userTypes from './userTypes';

const loginRequest = () => ({
  type: userTypes.LOGIN,
});

const loginError = error => ({
  type: userTypes.LOGIN_ERROR,
  error,
});

const loginSuccess = user => ({
  type: userTypes.LOGIN_SUCCESS,
  user,
});

const logoutRequest = () => ({
  type: userTypes.LOGOUT,
});

export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await userController.login(email, password);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

export const logout = () => (dispatch) => {
  userController.logout();
  dispatch(logoutRequest());
};
