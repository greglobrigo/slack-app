import { useState, useEffect } from "react";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Hooks = () => {
  const [post, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [validInfo, setValidInfo] = useState({
    passwordsDoNotMatch: false,
    invalidEmailFormat: false,
  });
  const [isRegister, setIsRegister] = useState({
    successful: false,
    failed: false,
  });
  const [isLogin, setIsLogin] = useState({
    successful: false,
    failed: false,
  });

  const registerUser = async () => {
    await axios({
      url: "http://206.189.91.54/api/v1/auth",
      data: {
        email: email,
        password: password,
        password_confirmation: secondPassword,
      },
      headers: {},
      method: "POST",
    })
      .then((res) => {
        setPost(res);
        setIsRegister({ successful: true });
        resetUserInput();
      })
      .catch((error) => {
        console.log(error);
        setIsRegister({ failed: true });
      });
  };

  const register = (e) => {
    e.preventDefault();
    if (!email.includes("@" && ".")) {
      setValidInfo({ invalidEmailFormat: true });
    } else if (password !== secondPassword) {
      setValidInfo({ passwordsDoNotMatch: true });
    } else {
      registerUser();
    }
  };

  const loginUser = async () => {
    await axios({
      url: "http://206.189.91.54/api/v1/auth/sign_in",
      data: { email: email, password: password },
      headers: {},
      method: "POST",
    })
      .then((res) => {
        setPost(res);
        setIsLogin({ successful: true });
        resetUserInput();
      })
      .catch((error) => {
        console.log(error);
        setIsLogin({ failed: true });
      });

    //setPost(res.data?.data)
    //  console.log({res});
    //  console.log({post});
  };

  const logIn = (e) => {
    e.preventDefault();
    if (!email.includes("@" && ".")) {
      setValidInfo({ invalidEmailFormat: true });
    } else {
      loginUser();
    }
  };

  const getUsers = async () => {
    await axios({
      url: "http://206.189.91.54/api/v1/users",
      data: {},
      headers: {
        "access-token": post?.headers?.["access-token"],
        client: post?.headers?.client,
        expiry: post?.headers?.expiry,
        uid: post?.headers?.uid,
      },
      method: "GET",
    })
      .then((res) => setUsers(res))
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllUsers = () => {
    getUsers();
  };

  const resetUserInput = () => {
    setEmail("");
    setPassword("");
    setSecondPassword("");
  };

  return {
    post,
    users,
    password,
    setPassword,
    email,
    setEmail,
    logIn,
    getAllUsers,
    setIsLogin,
    isLogin,
    isRegistering,
    setIsRegistering,
    secondPassword,
    setSecondPassword,
    register,
    registerUser,
    isRegister,
    setIsRegister,
    validInfo,
    setValidInfo,
    Avatar,
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
  };
};

export default Hooks;
