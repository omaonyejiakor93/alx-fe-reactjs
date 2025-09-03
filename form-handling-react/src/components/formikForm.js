// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function FormikForm() {
  return (
    <div>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          alert("Form submitted successfully!");
        }}
      >
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field id="username" name="username" type="text" />
            <ErrorMessage name="username" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;