import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import { Button, TextField, FormControl, Typography } from "@mui/material";

const Schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Must be min 8 symbols!")
    .max(20, "Must be max 20 symbols!")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passId = useId();

  return (
    <div className={css["form-div"]}>
      <h3>
        <Typography>Login</Typography>
      </h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        onSubmit={(values, action) => {
          dispatch(login(values));
          action.resetForm();
        }}
      >
        <Form className={css["login-form"]} as={FormControl} component="form">
          <Field
            id={emailId}
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
            className={css["login-inputs"]}
          />

          <Field
            placeholder="Your password"
            sx={{
              m: 1,
              width: "300px",
              margin: 0.5,
            }}
            size="small"
            helperText={<ErrorMessage name="password" />}
            id={passId}
            as={TextField}
            fullWidth
            variant="outlined"
            label="Password"
            name="password"
            autoComplete="current-password"
            className={css["login-inputs"]}
          />

          <Button
            type="submit"
            variant="contained"
            className={css["submit-btn"]}
          >
            Log In
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
