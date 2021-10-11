import React, { useState } from 'react'
import { auth } from "../firebase"
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const register = () => {
        if (!name){
            return alert("Please enter a full name!");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            userAuth.uesr.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
        })
    };



    const loginToApp = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login">
            
            <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTv5NTn4Iw_QsC7kW0Lbw3LrlPcPAHso2l9A&usqp=CAU" 
            alt=""
            />
            <form>
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Full name (required if registering)"
                type="text"
                />
                <input
                value={profilePic}
                onChange={e => setProfilePic(e.target.value)}
                placeholder="Profile pic URL (optional)"
                type="text"
                />
                <input 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                />
                <input 
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>
                Not a member?{" "}
                <span className="login-register" onClick={register}>Register Now</span>
            </p>
        
        </div>
    )
}

export default Login
