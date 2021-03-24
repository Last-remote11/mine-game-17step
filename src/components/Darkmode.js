import React from 'react';
import Button from '@material-ui/core/Button';
import { enableDarkMode } from '../actions'
import { useDispatch } from 'react-redux'

const Darkmode = () => {

  const dispatch = useDispatch()

  return (
      <Button variant="contained" onClick={() => dispatch(enableDarkMode())}>Dark/Light Mode</Button>
  );
};

export default Darkmode;