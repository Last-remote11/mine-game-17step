import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const SignupBody = React.forwardRef(({ modalStyle, classes, setSignupRoute}, ref) => {
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  // const API_URL = 'https://intense-brushlands-31556.herokuapp.com'
  const API_URL = 'http://localhost:3000'

  const submitSignupForm = async (e) => {
    e.preventDefault()

    try {
      let res = await fetch(API_URL + '/signup', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: name,
          password: password
        })
      })
      let resJson = await res.json()
      if (resJson) {
        history.push('/login')
      }
    } catch(e) {
      console.log('오류가 발생하였습니다.', e)
    }  
  }
  
  return(
  <div ref={ref} style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title">회원가입</h2>
    <p id="simple-modal-description">
      Hello this is signup page.
    </p>
    <Button color="primary" onClick={() => setSignupRoute(false)}>돌아가기</Button>
    <Button color="primary" onClick={(e) => submitSignupForm(e)}>가입하기</Button>
  </div>
  )
});

export default SignupBody