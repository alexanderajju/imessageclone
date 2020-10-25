import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Imessage from './Imessage';
import Login from './Login';
import { selectUser,setUser,logout } from './user/userSlice';
import { auth } from './firebase'

function App() {
const user=useSelector(selectUser)
const dispatch = useDispatch()

useEffect(()=>{
auth.onAuthStateChanged((authUser) =>{
  if(authUser){
dispatch(setUser({
  uid: authUser.providerId,
  photo:authUser.photoURL,
  email:authUser.email,
  displayName: authUser.displayName
}))
  }else{
dispatch(logout)
  }
})
},[])

  return (
    <div className="app">
    {user?
      <Imessage/>: 
      <h2><Login/></h2>
      }
    </div>
  );
}

export default App;
