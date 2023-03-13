import React from 'react'

export default function Register() {
    return (
        <div className="from-register">
            <img src="../img/Image.jpg" alt="" />
            <div className="Register">
                <div className="extra-register">
                    <div className="register-title">
                        <h2>Register</h2>
                        <p>Welcome Back</p>
                    </div>
                    <div className="Register-inpt">
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
                        <div className="inpts">
                            <div className="inpt">
                                <i className="fa-solid fa-lock" />
                                <input type="password" placeholder="C Password" />
                                {/* <i class="fa-solid fa-eye-slash"></i> */}
                            </div>
                            <span />
                        </div>
                    </div>
                    <div className="register-btn">
                        <button>Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
