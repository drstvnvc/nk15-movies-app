import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../services/AuthService";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await authService.register(userData);

    if (!data) {
      alert("Registration failed");
      return;
    }
    history.push(`movies`);
  };

  return (
    <div>
      <h2>Register</h2>
      <form
        style={{ display: "flex", flexDirection: "column", width: 300 }}
        onSubmit={handleSubmit}
      >
        <input
          required
          minLength={2}
          value={userData.name}
          placeholder="Name"
          onChange={({ target }) =>
            setUserData({ ...userData, name: target.value })
          }
        />
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
          minLength={6}
          value={userData.password}
          placeholder="Password"
          onChange={({ target }) =>
            setUserData({ ...userData, password: target.value })
          }
        />
        <input
          required
          type="password"
          minLength={6}
          value={userData.password_confirmation}
          placeholder="Confirm Password"
          onChange={({ target }) =>
            setUserData({ ...userData, password_confirmation: target.value })
          }
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
