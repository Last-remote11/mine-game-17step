import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, TextField } from '@material-ui/core';

const SignupBody = React.forwardRef(({ modalStyle, classes, setSignupRoute}, ref) => {
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const API_URL = 'http://localhost:3000'
  // const API_URL = 'https://intense-brushlands-31556.herokuapp.com'

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      submitSignupForm(e)
    }
  }

  const submitSignupForm = async (e) => {
    e.preventDefault()

    try {
      let res = await fetch(API_URL + '/signup', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: name,
          password: password
        })
      })
      let resJson = await res.json()
      if (resJson[0] === name) {
        history.push('/login')
        alert(`${resJson[0]}님 가입이 완료되었습니다. 가입한 이름, 비밀번호로 로그인해주세요`)
        setSignupRoute(false)
      } else {
        alert(resJson)
      }
    } catch(e) {
      console.log('오류가 발생하였습니다.', e)
      alert(e)
    }  
  }
  
  return(
  <div ref={ref} style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title">회원가입</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        variant="outlined" 
        label="아이디" 
        onChange={(e) => setName(e.target.value)}
        onKeyPress={(e) => pressEnter(e)}/>
      <TextField 
        id="filled-password-input" 
        variant="outlined" 
        label="비밀번호"
        type="password"
        autoComplete="current-password"
        size='normal'
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => pressEnter(e)}
        />
    </form>
    <Button color="primary" onClick={() => setSignupRoute(false)}>돌아가기</Button>
    <Button color="primary" onClick={(e) => submitSignupForm(e)}>가입하기</Button>
  </div>
  )
});

export default SignupBody