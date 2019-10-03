import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { updateFailure, updateSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* updateProfile({ payload }) {
  try {
    const { email, name, ...rest } = payload.data;
    const response = yield call(api.put, 'users', {
      email,
      name,
      ...(rest.oldpassword ? rest : {}),
    });
    const profile = response.data;
    console.tron.log(profile);
    yield put(updateSuccess(profile));
    toast.success('Perfil atualizado com sucesso');

    history.push('/');
  } catch (error) {
    toast.error('Erro ao atualizar perfil');
    yield put(updateFailure());
  }
}

export default all([takeLatest('@auth/UPDATE_REQUEST', updateProfile)]);
