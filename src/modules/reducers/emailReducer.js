const initialState = {
  step: 1,
  email: "",
  message: ""
};

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case "EMAIL_NEXT_STEP":
      return { ...state, step: action.step + 1 };
    case "EMAIL_PREV_STEP":
      return { ...state, step: action.step - 1 };
    case "EMAIL_RESET_STEP":
      return { ...state, step: 1 };
    case "EMAIL_CHANGE":
      return { ...state, email: action.email };
    case "MESSAGE_CHANGE":
      return { ...state, message: action.message };
    default:
      return state;
  }
}
