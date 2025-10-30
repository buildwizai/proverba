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
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '[::1]' ||
      host.endsWith('.local');

    if (import.meta.env.DEV && isLocal) {
      return Promise.resolve({ ok: true, mocked: true });
    }
  }

  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'subscribe', ...formData }),
    redirect: 'follow',
  }).then((response) => {
    if (response.ok) {
      return response;
    }

    // Netlify may respond with a 302/303 redirect; treat as success.
    if (response.status >= 300 && response.status < 400) {
      return response;
    }

    // Some Netlify setups return a 404 but still create a submission.
    if (
      response.status === 404 &&
      (response.redirected || response.url.includes('/thank-you'))
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
