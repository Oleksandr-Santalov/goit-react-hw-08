import { Formik, Form, Field, ErrorMessage } from "formik";
import { register } from "../../redux/auth/operations";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passId = useId();
  const dispatch = useDispatch();

  return (
    <div className={css["reg-div"]}>
      <h3>
        <Typography>Registration</Typography>
      </h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, action) => {
          dispatch(register(values));
          action.resetForm();
        }}
      >
        <Form className={css["reg-form"]}>
          <Field
            placeholder="Your name"
            sx={{
              width: "300px",
              margin: 0.5,
            }}
            helperText={<ErrorMessage name="name" />}
            fullWidth
            size="small"
            variant="outlined"
            label="Name"
            as={TextField}
            name="name"
            className={css["reg-inputs"]}
            id={nameId}
          />

          <Field
            placeholder="Your email"
            sx={{
              width: "300px",
              margin: 0.5,
            }}
            helperText={<ErrorMessage name="email" />}
            fullWidth
            size="small"
            variant="outlined"
            label="Email"
            as={TextField}
            name="email"
            className={css["reg-inputs"]}
            id={emailId}
          />

          <Field
            placeholder="Create password"
            sx={{
              width: "300px",
              margin: 0.5,
            }}
            helperText={<ErrorMessage name="password" />}
            fullWidth
            size="small"
            variant="outlined"
            label="Password"
            as={TextField}
            name="password"
            className={css["reg-inputs"]}
            id={passId}
          />

          <Button
            type="submit"
            variant="contained"
            className={css["submit-btn"]}
          >
            Create acc
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
