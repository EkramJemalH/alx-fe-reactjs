import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

export default function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}
