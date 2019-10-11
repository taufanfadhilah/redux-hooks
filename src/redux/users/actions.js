import { ADD_USER, UPDATE_USER, DELETE_USER } from "./constants";

export const addUserAction = user => ({ type: ADD_USER, payload: user });
export const updateUserAction = user => ({ type: UPDATE_USER, payload: user });
export const deleteUserAction = user => ({ type: DELETE_USER, payload: user });
