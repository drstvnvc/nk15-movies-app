import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";
import { setActiveUser, setToken } from "../store/activeUser/slice";

export default function Login() {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await authService.login(userData);
    dispatch(setActiveUser(data.user));
    dispatch(setToken(data.token));

    if (!data) {
      alert("Invalid credentials");
      return;
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          required
          value={userData.email}
          placeholder="Email"
          onChange={({ target }) =>
            setUserData({ ...userData, email: target.value })
          }
        />
        <input
          required
          type="password"
          value={userData.password}
          placeholder="Password"
          onChange={({ target }) =>
            setUserData({ ...userData, password: target.value })
          }
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
