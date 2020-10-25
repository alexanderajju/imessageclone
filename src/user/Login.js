import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setUser,logout,selectUser} from './userSlice'

function Login() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logInApp=()=>{
dispatch(setUser({user:'Aju Alex'}))

    }
    console.log(user)
    return (
        <div>
            <h1>Login</h1>
            <button onClick={logInApp}>login</button>
            <button onClick={()=>dispatch(
                logout()
            )}>logout</button>
            {
                user?<h3>signed in {user}</h3>: <h3>login</h3>
            }
        </div>
    )
}

export default Login
