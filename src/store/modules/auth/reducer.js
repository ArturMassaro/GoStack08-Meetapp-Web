import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, actions) {
  return produce(state, draft => {
    switch (actions.type) {
      case '@auth/SIGN_IN_REQUEST':
        draft.loading = true;
        break;

      case '@auth/SIGN_IN_SUCCESS':
        draft.loading = false;
        draft.token = actions.payload.token;
        draft.signed = true;
        break;

      case '@auth/LOG_OUT_REQUEST':
        draft.loading = false;
        draft.token = null;
        draft.signed = false;
        break;

      case '@auth/SIGN_UP_REQUEST':
        draft.loading = true;
        break;

      case '@auth/SIGN_UP_SUCCESS':
        draft.loading = false;
        break;

      case '@auth/SIGN_IN_FAILURE':
        draft.loading = false;
        break;
      default:
        break;
    }
  });
}
