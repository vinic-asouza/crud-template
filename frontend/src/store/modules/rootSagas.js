import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import cliente from './cliente/sagas';

export default function* rootSaga() {
  return yield all([auth, cliente]);
}
