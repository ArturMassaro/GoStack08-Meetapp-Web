export function updateRequest(data) {
  return {
    type: '@auth/UPDATE_REQUEST',
    payload: { data },
  };
}

export function updateSuccess(profile) {
  return {
    type: '@auth/UPDATE_SUCCESS',
    payload: { profile },
  };
}

export function updateFailure() {
  return {
    type: '@auth/UPDATE_FAILURE',
  };
}
