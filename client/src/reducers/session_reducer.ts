import { RECEIVE_USER_LOGOUT, SessionActions } from "../actions/session_actions";

export interface SessionState {
  isAuthenticated: boolean
  user: any
}

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function sessionReducer(state = initialState, action: SessionActions): SessionState {
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
