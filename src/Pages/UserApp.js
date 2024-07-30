import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserApp() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const userList = await axios.get(
        "https://668d4175099db4c579f24e88.mockapi.io/user"
      );

      setUserData(userList.data);
    };

    getData();
  }, []);

  return (
    <>
      <Link to={"/create"} className="btn btn-primary m-3">
        Create User
      </Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.mobile}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default UserApp;

// CRUD        -> Create    Read    Update    Delete

// HTTP method -> POST      Get      PUT      Delete
