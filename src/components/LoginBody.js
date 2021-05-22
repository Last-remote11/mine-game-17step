import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
// import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';


const LoginBody = ({ modalStyle, classes, setSignupRoute}) => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const API_URL = 'https://intense-brushlands-31556.herokuapp.com'

  const submitLoginForm = async (e) => {
    e.preventDefault()
    let res = await fetch(API_URL + '/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: name,
        password: password
      })
    })
    let resJson = await res.json()
    await window.localStorage.setItem('token', resJson.token);
    console.log(resJson)
  }
  
  return (
  <div style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title">로그인</h2>

    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        variant="outlined" 
        label="아이디" 
        onChange={(e) => setName(e.target.value)}/>
      <TextField 
        id="filled-password-input" 
        variant="outlined" 
        label="비밀번호"
        type="password"
        autoComplete="current-password"
        size='normal'
        onChange={(e) => setPassword(e.target.value)}
        />
    </form>
    <Button color="primary" onClick={submitLoginForm}>로그인</Button>
    <Button color="primary" onClick={() => setSignupRoute(true)}>가입</Button>
  </div>
  )
};

export default LoginBody