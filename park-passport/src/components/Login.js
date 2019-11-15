// import React from "react";
// import styled from "styled-components";

// const Login = () => <h1>Login</h1>;

// export default Login;
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
// import UserList from "../components/UserList";

// Styling

const StyledDiv = styled.div`
  border: 1px solid blue;
  height: 400px;
  display: flex;
  flex-direction: column;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .submit-button {
    width: "30px";
  }
`;

function LoginForm(props) {
  console.log(props);
  return (
    <StyledDiv className="New-user-form">
      <h2>Log In</h2>
      <Form className="form">
        <label>
          User Name:
          <Field type="text" name="user_name" placeholder="User name" />
        </label>
        <br />
        <label>
          Password :
          <Field type="password" name="password" placeholder="password " />
        </label>
        <br />
        <br />

        {/* <Field className="submit-button" type="submit" /> */}
        <button>Submit</button>
      </Form>
      {/* <div>
    {

    }
</div> */}
    </StyledDiv>
  );
}

const LoginFormWithFormik = withFormik({
  mapPropsToValues() {
    return {
      password: "",
      user_name: ""
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string().required("password is a required field"),
    user_name: Yup.string().required("password is a required field")
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
