import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { withFormik, Form, Field, ErrorMessage } from "formik";

// Styling

const StyledDiv = styled.div`
  /* border: 1px solid blue; */
  width: 61.8%;
  /* border: 1px solid blue; */
  margin: 0 auto;
  /* height: 400px; */
  display: flex;
  flex-direction: column;
  justify-content: end;
  .form {
    /* border: 1px solid blue; */
    margin: 0 16.1%;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);

    label {
      width: 100%;
      color: #555;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 5px;
      padding-top: 10px;
      color: black;
      display: flex;
      flex-direction: column;
      font-size: 12px;
    }
    #first-name {
      margin-top: 9.6%;
    }
    .terms-checkbox {
      width: 95%;
      margin: 0 auto;
    }
    input {
      display: flex;
      flex-direction: column;
      width: 38.2%;
      margin: 0 auto;
      /* margin-right: 40px; */
      margin-bottom: 3px;
      text-align: center;
    }
    input[type="checkbox"] {
      width: 20px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    /* .check {
      margin-left: 3px;
    } */
    input[type="submit"] {
      margin: 0 auto;
      padding-top: 9.6%;
      width: 30%;
      height: 40px;
    }
  }
  button {
    margin: 0 auto 20px auto;
    width: 60px;
  }
  .error {
    color: red;
    font-size: 12px;
    font-weight: 600;
  }
`;

function RegistrationForm(props) {
  console.log(props);
  return (
    <StyledDiv className="New-user-form">
      <h2>Register</h2>
      <Form className="form">
        <ErrorMessage
          name="first_name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label id="first-name">
          First Name:
          <Field type="text" name="first_name" placeholder="first name" />
        </label>{" "}
        <ErrorMessage
          name="last_name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Last Name:
          <Field type="text" name="last_name" placeholder="last name " />
        </label>
        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          email:
          <Field type="email" name="email" placeholder="email " />
        </label>
        <ErrorMessage
          name="user_name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Username:
          <Field type="text" name="user_name" placeholder="Username" />
        </label>
        <ErrorMessage
          name="current_password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password :
          <Field
            type="password"
            name="current_password"
            placeholder="Password "
          />
        </label>
        <ErrorMessage
          name="password_confirmation"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Re-enter Password :
          <Field
            type="password"
            name="password_confirmation"
            placeholder="Re-enter password "
          />
        </label>
        <ErrorMessage
          name="terms"
          render={msg => <div className="error">{msg}</div>}
        />
        <label className="terms-checkbox">
          I confirm I have read and agree to the Terms of Service
          <Field type="checkbox" name="terms" />
        </label>
        {/* <Field className="submit-button" type="submit" /> */}
        <button type="submit">Submit</button>
      </Form>
      {/* <div>
    {

    }
</div> */}
    </StyledDiv>
  );
}

const RegistrationFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      current_password: "",
      user_name: "",
      terms: false
    };
  },
  validationSchema: Yup.object().shape({
    first_name: Yup.string()
      .required("Please enter first name")
      .min(2, "Too Short!")
      .max(25, "Too Long!"),
    last_name: Yup.string()
      .required("Please enter last name")
      .min(2, "Too Short!")
      .max(25, "Too Long!"),
    email: Yup.string()
      .required("Please enter email")
      .email("Invalid email"),
    current_password: Yup.string()
      .required("password is a required field")
      .min(5, "Too Short!")
      .max(25, "Too Long!"),

    password_confirmation: Yup.string()
      .required("re-enter password")
      .oneOf([Yup.ref("current_password"), null], "Passwords must match"),

    user_name: Yup.string()
      .required("user name is a required field")
      .min(3, "Too Short!")
      .max(25, "Too Long!"),

    terms: Yup.boolean().required(
      "It is necessary to agree to terms of service to proceed with registration"
    )
  }),

  handleSubmit(input, tools) {
    const list = tools.props.userList;
    const setList = tools.props.setUserList;

    axios
      .post("https://reqres.in/api/users/", input)
      .then(res => {
        console.log(res.data);

        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(RegistrationForm);

export default RegistrationFormWithFormik;
