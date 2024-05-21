import { deleteContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import toast from "react-hot-toast";

export const Contact = ({ item }) => {
  console.log(item);
  const dispatch = useDispatch();

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://source.unsplash.com/random"
          title="green iguana"
        ></CardMedia>

        <CardContent>
          <AccountCircleIcon />
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <PhoneIphoneIcon />
          <Typography variant="body2" color="text.secondary">
            {item.number}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              dispatch(deleteContact(item.id));
              toast.custom(
                <Stack>
                  <Alert variant="filled" severity="info">
                    The contact has been deleted.
                  </Alert>
                </Stack>,
                { position: "bottom-left" }
              );
            }}
            size="small"
          >
            Delete <DeleteForeverIcon />
          </Button>
          <Button disabled size="small">
            Edit <EditIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
