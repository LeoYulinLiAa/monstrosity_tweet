
import { Action, Dispatch } from "redux";
import { setAuthToken } from "../utils/session_api";

// This pattern should be familiar to you from the full stack project

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export type ReceiveUserLogoutAction = Action<typeof RECEIVE_USER_LOGOUT>;

export type SessionActions = ReceiveUserLogoutAction;

export const logoutUser = (): ReceiveUserLogoutAction => ({
  type: RECEIVE_USER_LOGOUT
});

export const logout = () => (dispatch: Dispatch) => {
  // Remove the token from local storage
  localStorage.removeItem('jwtToken')
  // Remove the token from the common axios header
  setAuthToken(null)
  // Dispatch a logout action
  dispatch(logoutUser())
};
