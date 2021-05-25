import React from 'react';
import Button from '@material-ui/core/Button';
import { userLogout } from '../../reducer'
import { useDispatch } from 'react-redux'
import { socket } from '../WebSocket'
import { useHistory } from "react-router-dom";


const LogoutButton = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    socket.emit('forceDisconnect')
    dispatch(userLogout)
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <div className='button-right'>
      <Button variant="contained" color="secondary" onClick={() => logout()}>
        로그아웃
      </Button>
    </div>
  );
};

export default LogoutButton;