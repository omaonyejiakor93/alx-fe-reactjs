// src/App.jsx
import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "0 auto", padding: "2rem" }}>
      <h1>Form Handling in React</h1>

      {/* Step 2: Controlled Component */}
      <section style={{ marginBottom: "2rem" }}>
        <h2>Controlled Registration Form</h2>
        <RegistrationForm />
      </section>

      {/* Step 3: Formik Component */}
      <section>
        <h2>Formik Registration Form</h2>
        <FormikForm />
      </section>
    </div>
  );
}

export default App;