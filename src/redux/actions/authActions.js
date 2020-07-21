import { CHANGE_LOGGED_IN_FLAG, SET_CURRENT_USER } from '../constants';
import { setError } from './mainActions';

import http from 'axios';

export const changeLoggedInFlag = (isLoggedIn) => {
  return {
    type: CHANGE_LOGGED_IN_FLAG,
    isLoggedIn,
  };
};

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    currentUser: user,
  };
};

export const login = (username = '', password = '') => {
  return async (dispatch) => {
    try {
      let user = await http.get(`https://jsonplaceholder.typicode.com/users/1`);
      dispatch(setCurrentUser(user.data));
    } catch (err) {
      console.log('Error in getUserById', err.message);
      dispatch(setError(err.message));
    }
  };
};
