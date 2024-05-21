import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AuthNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      {!isLoggedIn && (
        <div className={css["auth-nav"]}>
          <NavLink className={css["to-register"]} to="/register">
            <Typography> Register</Typography>
          </NavLink>
          <NavLink className={css["to-login"]} to="/login">
            <Typography> Log In</Typography>
          </NavLink>
        </div>
      )}
    </>
  );
};
