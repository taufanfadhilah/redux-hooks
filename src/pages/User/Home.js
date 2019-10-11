import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserAction } from "../../redux/users/actions";

function Home() {
  const users = useSelector(state => state.UserReducer.users)
  const dispatch = useDispatch()

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <h2>List Users</h2>
        </div>
        <div className="col-md-4 text-right">
          <Link to="/add">
            <button className="btn btn-primary">Add User</button>
          </Link>
        </div>
        <div className="col-md-12">
          <hr />
        </div>
      </div>
      <div className="row mt-3">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Country</th>
              <th className="text-center" scope="col" colSpan="3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{++index}</th>
                <td>
                  <Link to={`/detail/${user.id}`}>{user.name}</Link>
                </td>
                <td>{user.email}</td>
                <td>{user.country}</td>
                <td>
                  <Link to={`/todos/${user.id}`}>
                    <button className="btn btn-primary">TODOS</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/edit/${user.id}`}>
                    <button className="btn btn-warning">Update</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteUserAction(user))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
