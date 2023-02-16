import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import loginImage from "../../assests/images/login.jpg";
import * as yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { registerUser } from "../../slices/userslice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const state = useSelector((state) => state.user) 
  const { login: loginPage } = useParams();
  const [login, setLogin] = useState(true);
  console.log(state);

  // const validationSchema = yup.object().shape({
  //   username : yup.string().required("Username Required"),
  //   email : yup.string().email().required("Email Required"),
  //   password : yup.string().min(6).required("Password Required"),
  //   cpassword : yup.string().min(6).required("Confirm Password Required"),
  // })



  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validate: (values) => {
      let errors = {};
      if (!login && !values.username) {
        errors.username = "Username is required";
      } else if (!values.email) {
        errors.email = "Email is Required";
      } else if (!values.password) {
        errors.password = "Password Required";
      } else if (!login && !values.cpassword) {
        errors.cpassword = "Confirm Password Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      if(!login){
        dispatch(registerUser(values))
        navigate("/user/login")
      }
    },
  });

  console.log(formik.errors);
  useEffect(() => {
    if (loginPage === "login") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  });
  return (
    <Box>
      <Box
        className="login__banner"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "400px",
          backgroundImage: `linear-gradient(45deg, rgba(0,0,0,1.2) 0%, rgba(0,0,0,0.1)), url(${loginImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          color={"white"}
          fontWeight={600}
          fontFamily="'Oswald', sans-serif"
          letterSpacing={3}
          fontSize={120}
        >
          Login
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "1270px", margin: "0 auto", padding: "40px 0" }}>
        <Typography
          variant="h5"
          fontWeight={500}
          fontFamily="'Oswald', sans-serif"
          letterSpacing={2}
          sx={{ textAlign: "center" }}
        >
          Enter Your {login ? "Login" : "Register"} Details
        </Typography>
        <Box
          component={"form"}
          className="login__form"
          sx={{
            textAlign: "center",
            width: {
              xs: "80%",
              md: "70%",
              lg: "60%",
            },
            margin: "20px auto",
          }}
          onSubmit={formik.handleSubmit}
        >
          {!login && (
            <>
              {" "}
              <input
                type="text"
                placeholder="User name"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <div>
                {formik.errors.username && (
                  <span style={{ color: "red" }}>
                    {" "}
                    {formik.errors.username}
                  </span>
                )}
              </div>
            </>
          )}
          <input
            type="email"
            placeholder="User Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <div>
              <span style={{ color: "red" }}>{formik.errors.email}</span>
            </div>
          )}
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <div>
              <span style={{ color: "red" }}>{formik.errors.password}</span>
            </div>
          )}
          {!login && (
            <>
              <input
                type="text"
                placeholder="Confirm Password"
                name="cpassword"
                value={formik.values.cpassword}
                onChange={formik.handleChange}
              />
              <div>
                {formik.errors.cpassword && (
                  <span style={{ color: "red" }}>
                    {" "}
                    {formik.errors.cpassword}
                  </span>
                )}
              </div>
            </>
          )}
          <button type="submit" className="login__submit">
            {login ? "Login" : "Register"}
          </button>
          {login ? (
            <Typography variant="body2" marginTop={2}>
              Don't Have an account?{" "}
              <span
                className="register"
                onClick={() => setLogin(false)}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                <Link to={"/user/register"}>Register</Link>
              </span>
            </Typography>
          ) : (
            <Typography variant="body2" marginTop={2}>
              Already have an account?{" "}
              <span
                className="register"
                onClick={() => setLogin(true)}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                <Link to={"/user/login"}>Login Instead</Link>
              </span>
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterPage;
