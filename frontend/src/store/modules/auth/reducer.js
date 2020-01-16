/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  user: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGIN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.user = action.payload.user;
        draft.loading = false;
        break;
      }
      case '@auth/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.token = null;
        draft.signed = false;
        draft.user = null;
        break;
      }
      default:
    }
  });
}
