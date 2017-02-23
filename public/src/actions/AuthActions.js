import axios from 'axios';
import { createAction } from 'redux-actions';
import { browserHistory } from 'react-router';
import * as AuthActionTypes from '../constants/AuthActionTypes';

export const setUser = createAction(AuthActionTypes.SET_USER);

export function login(payload) {
  const {
    username,
    password,
  } = payload;

  return dispatch =>
    axios.post('/auth/login', {
      username,
      password,
    })
    .then((response) => {
      console.log('response data', response.data);
      // StorageService.createEntry('user', normalized.result);

      // dispatch(setUser(response.data));
    })
    .catch((err) => {
      console.error(err.response || err); // eslint-disable-line no-console
      // dispatch(setError(err.response || err));
    });
}
