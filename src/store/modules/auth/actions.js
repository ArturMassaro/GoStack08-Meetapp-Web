export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(email, password, name) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { email, password, name },
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function logOutRequest() {
  return {
    type: '@auth/LOG_OUT_REQUEST',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}
