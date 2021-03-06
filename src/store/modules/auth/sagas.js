import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { signInSuccess, signUpSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'session', {
      email,
      password,
    });
    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    yield put(signFailure());

    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function* signUp({ payload }) {
  console.tron.log('Entrou');
  try {
    const { email, name, password } = payload;
    console.tron.log('asdasd', email, name, password);

    const response = yield call(api.post, 'users', {
      email,
      password,
      name,
    });
    console.tron.log(response);

    yield put(signUpSuccess());

    history.push('/');
  } catch (error) {
    yield put(signFailure);
    console.tron.log('Entrou3');

    toast.error('Falha na autenticação, verifique seus dados');
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/LOG_OUT_REQUEST', logOut),
]);
