import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/UPDATE_REQUEST':
        break;
      case '@auth/UPDATE_SUCCESS':
        draft.profile = action.payload.profile;
        break;
      case '@auth/UPDATE_FAILURE':
        break;
      case '@auth/SIGN_IN_SUCCESS':
        draft.profile = action.payload.user;
        break;
      case '@auth/LOG_OUT_REQUEST':
        draft.profile = null;
        break;
      default:
        break;
    }
  });
}
