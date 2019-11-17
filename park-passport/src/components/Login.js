import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { withFormik, Form, Field, ErrorMessage } from "formik";
// import UserList from "../components/UserList";

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
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

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

function LoginForm(props) {
  console.log(props);
  return (
    <StyledDiv className="New-user-form">
      <h2>Log in</h2>
      <Form className="form">
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

        <button type="submit">Submit</button>
      </Form>
    </StyledDiv>
  );
}

const LoginFormWithFormik = withFormik({
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
    current_password: Yup.string()
      .required("password is a required field")
      .min(5, "Too Short!")
      .max(25, "Too Long!"),

    user_name: Yup.string().required("user name is a required field")
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
})(LoginForm);

export default LoginFormWithFormik;
