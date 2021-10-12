import './App.css';
import React, { useEffect } from "react";
import { auth } from "./firebase"
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feeds/Feed";
import Login from "./Login/Login";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  
useEffect(() => {
    auth?.onAuthStateChanged((userAuth)  => {
      if(userAuth) {
        // user is logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );
      } else {
        // user is logged out
          dispatch(logout());
      }
    });
  }, [ ]);
  return (
   
    <div className="app">
      <Header />      
      {!user ? (
        <Login /> 
      ) : ( 
    <div className="app-body">
      <Sidebar />
      <Feed />
      {/* <Widgets /> */}
      </div>
      )}
    </div>
    
  );
  

  }
export default App;
