export const SUBMIT_FORM_REQUEST = 'form/submitRequest';
export const SUBMIT_FORM_SUCCESS = 'form/submitSuccess';
export const SUBMIT_FORM_FAILURE = 'form/submitFailure';
export const RESET_FORM = 'form/reset';

export const submitFormRequest = (payload) => ({
  type: SUBMIT_FORM_REQUEST,
  payload,
});

export const submitFormSuccess = (email) => ({
  type: SUBMIT_FORM_SUCCESS,
  payload: { email },
});

export const submitFormFailure = (error) => ({
  type: SUBMIT_FORM_FAILURE,
  payload: { error },
});

export const resetForm = () => ({
  type: RESET_FORM,
});

const initialState = {
  submitting: false,
  submittedEmail: '',
  error: '',
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FORM_REQUEST:
      return {
        ...state,
        submitting: true,
        error: '',
      };
    case SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        submitting: false,
        submittedEmail: action.payload.email,
      };
    case SUBMIT_FORM_FAILURE:
      return {
        ...state,
        submitting: false,
        error: action.payload.error,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
}
