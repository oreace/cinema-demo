import userTypes from '../actions/user/userTypes';

export const INITIAL_STATE = { error: false, user: null, loading: false };
console.log('usertypes', userTypes.LOGIN);
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.LOGIN:
      return {
        ...state,
      };
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case userTypes.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
export default userReducer;
