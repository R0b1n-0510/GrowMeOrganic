import "../Form/Form.module.css"

import React from 'react'
import { Button, FormControl, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorModal from '../ErrorModal/ErrorModal'

const Form = ({ formhandler, errorhandler, error }) => {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
  })

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  // const handleNameChange = (e) => {
  //   setName(e.target.value)
  // }
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value)
  // }
  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value)
  // }

  const handleSubmit = () => {
    const { name, email, phone } = formState;
    if (name !== '' || email !== '', phone !== '') {
      localStorage.setItem('user', JSON.stringify({ name, email, phone }))
      formhandler();
      navigate('/List')
    }
    else {
      errorhandler();
    }
  }

  return (
    <>
      {error && <ErrorModal error="Fill out all the fields" errorhandler={errorhandler} />}

      <Box className="form" sx={{ width: 1, maxWidth: 700, textAlign: "center", margin: "auto" }}>
        <Typography sx={{ fontSize: 40 }}>Enter your details</Typography>
        <FormControl className="Form" sx={{ width: "100%" }}>
          <TextField value={formState.name} onChange={(e) => inputChangeHandler(e)}
            margin="normal"
            required
            label="Name"
            name="name"
          />
          <TextField value={formState.email} onChange={(e) => inputChangeHandler(e)}
            margin="normal"
            required
            label="Email"
            name="email"
          />
          <TextField value={formState.phone} onChange={(e) => inputChangeHandler(e)}
            margin="normal"
            required
            label="Phone"
            name="phone"
          />
          <br />
          <Button onClick={handleSubmit} type="submit" variant="outlined" className="brn">Submit</Button>
        </FormControl>
      </Box>
    </>
  )
}

export default Form