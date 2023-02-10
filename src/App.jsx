import React, { useState } from "react";
import "./index.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { Route, Routes } from "react-router-dom";

function App() {
  const [validateForm, setValidateForm] = useState(false);
  const [showError, setShowError] = useState(false);
  const formhandler = () => {
    setValidateForm(true);
  }

  const errorHandler = () => {
    setShowError(!showError)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Form formhandler={formhandler} error={showError} errorhandler={errorHandler} />} />
        <Route path="/list" element={<List validateform={validateForm} />} />
      </Routes>
    </>
  );
}

export default App;