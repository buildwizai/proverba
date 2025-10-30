import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  SUBMIT_FORM_REQUEST,
  submitFormFailure,
  submitFormSuccess,
} from './form.js';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

function postToNetlify(formData) {
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'subscribe', ...formData }),
    redirect: 'follow',
  }).then((response) => {
    if (
      response.ok ||
      (response.status === 404 &&
        response.redirected &&
        response.url.includes('/thank-you'))
    ) {
      return response;
    }
    throw new Error(`Failed to submit form (${response.status})`);
  });
}

function* handleSubmitForm(action) {
  try {
    yield call(postToNetlify, action.payload);
    yield put(submitFormSuccess(action.payload.email));
  } catch (error) {
    yield put(submitFormFailure(error.message || 'Unknown error'));
  }
}

export default function* rootSaga() {
  yield all([takeLatest(SUBMIT_FORM_REQUEST, handleSubmitForm)]);
}
