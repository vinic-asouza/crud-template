import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import pessoa from './pessoa/sagas';

export default function* rootSaga() {
  return yield all([auth, user, pessoa]);
}
