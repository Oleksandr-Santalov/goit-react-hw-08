import { Contact } from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <Grid
      xs={6}
      container
      spacing={2}
      className={css.contacts}
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
      }}
    >
      {filteredContacts.map((item) => {
        return (
          <Item xs={6} key={item.id}>
            <Contact item={item} />
          </Item>
        );
      })}
    </Grid>
  );
};
