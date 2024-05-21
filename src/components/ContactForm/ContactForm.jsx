import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useId } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
const initialValue = {
  name: "",
  number: "",
};

const Validation = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be min 3 symbols")
    .max(50, "Must be no more then 50 symbols")
    .required("Required field"),
  number: Yup.string()
    .min(2, "Must be min 2 symbols")
    .max(50, "Must be no more then 50 symbols")
    .required("Required field"),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  return (
    <div className={css["contact-div"]}>
      <h3>
        <Typography>Contacts</Typography>
      </h3>
      <Formik
        initialValues={initialValue}
        validationSchema={Validation}
        onSubmit={(values, actions) => {
          dispatch(addContact(values));

          actions.resetForm();
        }}
      >
        <Form className={css["contact-form"]}>
          <Field
            as={TextField}
            placeholder="Add name"
            sx={{
              width: "300px",
              margin: 0.5,
            }}
            helperText={<ErrorMessage name="name" component="" />}
            fullWidth
            size="small"
            label="Name"
            variant="outlined"
            className={css["contact-inputs"]}
            type="text"
            name="name"
            id={nameId}
          />

          <Field
            placeholder="Add number"
            as={TextField}
            helperText={<ErrorMessage name="number" component="" />}
            variant="outlined"
            sx={{
              width: "300px",
              margin: 0.5,
            }}
            size="small"
            label="Number"
            className={css["contact-inputs"]}
            type="phone"
            name="number"
            id={numberId}
          />

          <Button
            onClick={() =>
              toast.custom(
                <Stack>
                  <Alert variant="filled" severity="success">
                    The contact has been added.
                  </Alert>
                </Stack>,
                { position: "bottom-left" }
              )
            }
            className={css["add-btn"]}
            variant="contained"
            type="submit"
          >
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
