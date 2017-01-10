import { handleActions } from 'redux-actions';
import * as AuthActionTypes from '../constants/AuthActionTypes';

const authReducer = handleActions({
  [AuthActionTypes.SET_USER]: (state, action) =>
    ({
      ...state,
      isLoggedIn: !!action.payload,
      currentUser: action.payload.userId,
    }),
}, {
  isLoggedIn: false,
  currentUser: null,
});

export default authReducer;
