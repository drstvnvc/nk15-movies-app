import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import AddMovie from "./pages/AddMovie";
import AppMovies from "./pages/AppMovies";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SingleMovie from "./pages/SingleMovie";
import authService from "./services/AuthService";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/add-movie">Add movie</Link>
            </li>
            {!isAuthenticated && (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
            {!isAuthenticated && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {isAuthenticated && (
              <li>
                <Link to="/profile">My profile</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route exact path="/movies">
            <AppMovies />
          </Route>
          <Route exact path="/movies/:id">
            <SingleMovie />
          </Route>
          <Route exact path="/add-movie">
            <AddMovie />
          </Route>
          <Route exact path="/edit/:id">
            <AddMovie />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
