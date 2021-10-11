import './App.css';
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Feed from "./Feeds/Feed";
import Login from "./Login/Login";


function App() {
  
  const user = useSelector(selectUser);

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
