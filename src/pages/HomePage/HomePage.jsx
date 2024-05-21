import css from "./HomePage.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const HomePage = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <main className={css["home-page"]}>
      {isLoggedIn ? (
        <h1 className={css.phone}>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            marginTop={20}
            variant="h1"
          >
            Welcome to Phonebook, {user.name}
          </Typography>
        </h1>
      ) : (
        <h1 className={css.phone}>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            marginTop={20}
            variant="h1"
          >
            Welcome to Phonebook
          </Typography>
        </h1>
      )}
    </main>
  );
};

export default HomePage;
