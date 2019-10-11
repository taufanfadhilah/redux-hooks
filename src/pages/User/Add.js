import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUserAction } from "../../redux/users/actions";
import uuid from "uuid";

function Add({ history }) {
  const dispatch = useDispatch();

  const Save = e => {
    e.preventDefault();
    let data = {
      id: uuid(),
      name: e.target.name.value,
      email: e.target.email.value,
      country: e.target.country.value
    };
    dispatch(addUserAction(data));
    history.push("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Add New User</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={Save}>
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Country</label>
              <input
                name="country"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
