import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const SignupBody = ({ modalStyle, classes, setSignupRoute}) => (
  <div style={modalStyle} className={classes.paper}>
    <h2 id="simple-modal-title">회원가입</h2>
    <p id="simple-modal-description">
      Hello this is signup pasdage.
    </p>
    <Button color="primary" onClick={() => setSignupRoute(false)}>돌아가기</Button>
  </div>
);

export default SignupBody