import React, { useState } from 'react';
import { enableDarkMode } from '../../reducer'
import { useDispatch } from 'react-redux'
import { Switch, FormControlLabel } from '@material-ui/core';

const Darkmode = () => {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const dispatch = useDispatch()

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    dispatch(enableDarkMode())
  };

  return (
    <div className='right'>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Dark Mode"
      />
    </div>
  );
}


export default Darkmode;