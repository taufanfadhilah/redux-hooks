import React, { useState } from "react";
import uuid from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAction,
  toggleTodoAction,
  deleteTodoAction
} from "../../redux/todos/actions";

function Todo({ match }) {
  const userId = match.params.user_id;
  const todos = useSelector(state =>
    state.TodosReducer.todos.filter(todo => todo.user_id === userId)
  );
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    let data = {
      id: uuid(),
      user_id: userId,
      name: todo,
      complete: false
    };
    dispatch(addTodoAction(data));
    setTodo("");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form action="" onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="">Todos:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Type your todo"
                value={todo}
                onChange={e => setTodo(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                ADD
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 offset-md-4">
          <ul className="list-group">
            {todos.map(todo => (
              <li className="list-group-item" key={todo.id}>
                <div className="row">
                  <div className="col-md-10">
                    <span
                      className={todo.complete ? "complete" : ""}
                      onClick={() => dispatch(toggleTodoAction(todo.id))}
                    >
                      {todo.name}
                    </span>
                  </div>
                  <div className="col-md-2 text-right">
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteTodoAction(todo.id))}
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        span {
          cursor: pointer;
        }
        .complete {
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
}

export default Todo;
