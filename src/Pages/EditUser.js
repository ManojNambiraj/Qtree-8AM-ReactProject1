import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const getData = async () => {
      const user = await axios.get(
        `https://668d4175099db4c579f24e88.mockapi.io/user/${id}`
      );

      setUserInput(user.data);
    };

    getData();
  }, []);

  const handleChange = ({ target: { value, name } }) => {
    setUserInput({ ...userInput, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, age, mobile, email, password } = userInput;

    const postData = await axios.put(
      `https://668d4175099db4c579f24e88.mockapi.io/user/${id}`,
      {
        name,
        age,
        mobile,
        email,
        password,
      }
    );

    if (postData) {
      alert("User Updated Successfully");
      navigate("/");
    }
  };

  return (
    <div className="main_container">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4">Updating User</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={userInput.name}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="mobile"
            value={userInput.mobile}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;
