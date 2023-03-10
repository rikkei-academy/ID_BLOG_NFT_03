import React from 'react'

export default function Login() {
    return (
        <div className="from-login">
            <img src="../img/Image.jpg" alt="" />
            <div className="Login">
                <div className="extra-login">
                    <div className="Login-title">
                        <h2>Hello Again</h2>
                        <p>Welcome Back</p>
                    </div>
                    <div className="Login-inpt">
                        <div className="inpts">
                            <i className="fa-regular fa-envelope" />
                            <input type="text" placeholder="Email Address" /> <br />
                            <span />
                        </div>
                        <div className="inpts">
                            <div className="inpt">
                                <i className="fa-solid fa-lock" />
                                <input type="password" placeholder="Password" />
                                {/* <i class="fa-solid fa-eye-slash"></i> */}
                            </div>
                            <span />
                        </div>
                    </div>
                    <div className="Login-btn">
                        <button>Login</button>
                    </div>
                    <div className="back">
                        Forgot Password
                    </div>
                </div>
            </div>
        </div>
    )
}
