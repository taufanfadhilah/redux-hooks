import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./constants";

const initialState = {
  todos: []
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { ...todo, complete: !todo.complete } : todo
        )
      };
    case DELETE_TODO:
        return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== payload)
        }
    default:
      return state;
  }
}

export default Reducer;
