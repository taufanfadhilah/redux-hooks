import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserAction } from "../../redux/users/actions";

function Edit({ history, match }) {
  const user = useSelector(state =>
    state.UserReducer.users.find(user => user.id === match.params.id)
  );
  const disptach = useDispatch();
  const Update = e => {
    e.preventDefault();
    let data = {
      id: e.target.id.value,
      name: e.target.name.value,
      email: e.target.email.value,
      country: e.target.country.value
    };
    disptach(updateUserAction(data));
    history.push("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h2>Edit User</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <form onSubmit={Update}>
            <input name="id" type="text" defaultValue={user.id} hidden />
            <div className="form-group">
              <label htmlFor="">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                defaultValue={user.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                defaultValue={user.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Country</label>
              <input
                name="country"
                type="text"
                className="form-control"
                defaultValue={user.country}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
