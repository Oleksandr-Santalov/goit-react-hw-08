import { Navigation } from "../Navigation/Navigation";
import { AuthNav } from "../AuthNav/AuthNav";
import { UserMenu } from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
import { CounterContact } from "../CounterContact/CounterContact";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./AppBar.module.css";
import { styled, alpha } from "@mui/material/styles";
import Appbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Container } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    // [theme.breakpoints.up("sm")]: {
    //   width: "0.1ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
  },
}));

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const state = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <Box sx={{ flexGrow: 1 }} alignItems="center">
        <Appbar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
            <Navigation />

            {isLoggedIn ? (
              <>
                <Container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Search className="">
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      onChange={(event) => {
                        dispatch(changeFilter(event.target.value));
                      }}
                      value={state}
                      placeholder="Find contacts by name"
                      inputProps={{ "aria-label": "search" }}
                    />
                  </Search>
                </Container>
                <CounterContact />
                <UserMenu />
              </>
            ) : (
              <AuthNav />
            )}
          </Toolbar>
        </Appbar>
      </Box>
    </header>
  );
};
