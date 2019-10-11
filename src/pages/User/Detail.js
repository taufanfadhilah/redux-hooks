import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserAction } from "../../redux/users/actions";

function Detail({ history, match }) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.UserReducer.users.find(user => user.id === match.params.id))

  const onDelete = () => {
    dispatch(deleteUserAction(user))
    history.push('/')
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Detail User</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h5>Name</h5>
          <p>{user.name}</p>
          <h5>Email</h5>
          <p>{user.email}</p>
          <h5>Country</h5>
          <p>{user.country}</p>
          <div className="row">
            <Link to={`/edit/${user.id}`}>
              <button className="btn btn-warning mx-3">Update</button>
            </Link>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
