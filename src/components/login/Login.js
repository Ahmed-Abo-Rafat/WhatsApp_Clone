import { Button } from '@mui/material';
import React from 'react'
import "./Login.css";
import { auth, provider } from '../../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Login = () => {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((res) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user,
            })
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login_container'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt='WhatsApp'/>
            <div className='login_text'>
                <h1>Sign in to WhatsApp</h1>
            </div>

            <Button onClick={signIn}>Sign In With Google</Button>
        </div>
    </div>
  )
}

export default Login