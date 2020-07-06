import { RootState } from "../reducers/root_reducer";

export const isLoggedInSelector = (state: RootState) => state.session.isAuthenticated;
