import { ADD_USER, UPDATE_USER, DELETE_USER } from "./constants";

const initialState = {
  users: []
};

function Reducers(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, payload]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === payload.id
            ? {
                ...user,
                name: payload.name,
                email: payload.email,
                country: payload.country
              }
            : user
        )
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== payload.id)
      };
    default:
      return state;
  }
}

export default Reducers;
