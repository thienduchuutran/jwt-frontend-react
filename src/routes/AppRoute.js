import {
    Switch,
    Route,
  } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUsers/Users";

const AppRoutes = (props) => {
    return (
        <>
        <Switch>
            <Route path="/project">
              project
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="/" exact>
              home
            </Route>
            <Route path="*">
              404 not found
            </Route>
          </Switch>
        </>
    )
}

export default AppRoutes