import React, { Component } from 'react';
import '../public/css/Login.css';
import axios from "axios";



class Login extends Component {
    render() {
        return (
            <div className="login_container">
                <div className="login_title-box">
                    <h1 onClick={handleReload} className="login-title">Login</h1>
                </div>
                <div className="login_form-box">
                    <form className="login-form">
                        <input type="text" className="id" placeholder='아이디' />
                        <input type="password" className="password" placeholder='비밀번호'/>
                        <button onClick={handleLogin} className="loginbtn">로그인</button>
                        <button onClick={handleSignup} className="signup">회원가입</button>
                    </form>
                </div>
            </div>
        );
    }
}

const handleReload = (e) => {
    e.preventDefault();
    window.location.reload(false);
}

const handleSignup = (e) => {
    e.preventDefault();
    const email = document.querySelector(".id").value;
    const password = document.querySelector(".password").value;
    const data = {
		"email" : email,
		"password" : password
	};
    axios({
        method: 'post',
        url: 'http://localhost:3003/signup',
        data: data
    })
    .then(loginSuccess)
    .catch(error => {
		alert("signup error!")
	});
}

const handleLogin = (e) => {
    e.preventDefault();
    const email = document.querySelector(".id").value;
    const password = document.querySelector(".password").value;
    const data = {
		"email" : email,
		"password" : password
	};
    axios({
        method: 'post',
        url: 'http://localhost:3003/login',
        data: data
    })
    .then(loginSuccess)
    .catch(error => {
		alert("login error!")
	});
}

const loginSuccess = (response) => {
    const { accessToken } = response.data;
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    window.location = "dashboard"
}

export default Login;