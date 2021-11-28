import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import authService from "../services/AuthService";

export default function Profile() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchActiveUser() {
      const activeUser = await authService.getMyProfile();
      setUser(activeUser);
    }
    fetchActiveUser();
  }, []);

  async function handleLogout() {
    await authService.logout();
    history.push("/login");
  }

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <>
          <h4>{user.name}</h4>
          <h5>{user.email}</h5>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
