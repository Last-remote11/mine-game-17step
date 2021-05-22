import React from 'react'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const SignupButton = () => {

  let history = useHistory();

  return (
    <Button onClick={() => history.push('/signup')}></Button>
  )
}

export default SignupButton