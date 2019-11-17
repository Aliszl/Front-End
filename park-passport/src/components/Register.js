// import React from "react";
// import styled from "styled-components";

// // const StyledDiv = styled.div`
// //   /* height: 80px; */
// //   padding-top: 15px;
// //   padding-bottom: 15px;
// //   border: 1px solid blue;
// //   display: flex;
// //   flex-direction: row;

// //   justify-content: space-around;
// // `;

// const Register = () => <h1>Register</h1>;

// export default Register;
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import { withFormik, Form, Field, ErrorMessage } from "formik";
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
        <label>
          First Name:
          <Field type="text" name="first_name" placeholder="first name" />
        </label>{" "}
        <br />
        <ErrorMessage
          name="last_name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Last Name:
          <Field type="text" name="last_name" placeholder="last name " />
        </label>
        <br />
        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          email:
          <Field type="email" name="email" placeholder="email " />
        </label>
        <br />
        <ErrorMessage
          name="current_password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password :
          <Field
            type="password"
            name="current_password"
            placeholder="password "
          />
        </label>
        <br />
        <ErrorMessage
          name="user_name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          User Name:
          <Field type="text" name="user_name" placeholder="User name" />
        </label>
        <br />
        <label>
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
