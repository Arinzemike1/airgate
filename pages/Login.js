import React from 'react';
import Link from 'next/link';
import DataCard from '../components/DataCard/DataCard';

const Login = () => {
    return (
        <div className="authentication-container">
            <div className="wrapper">
                <div className="logo pb-3">
                    <img src="./logo.png" alt="" height="50" />
                </div>
                <DataCard className="mx-auto" style={{ padding: '80px 60px' }}>
                    <h4 className="text-center">Welcome Back!</h4>
                    <p className="text-center">Login to your account</p>
                    <form className="form-container">

                        <div className="form-group">
                            <label className="label-text" htmlFor="username">Username</label>
                            <input type="text" className="input-field" placeholder="johndoe" />
                        </div>

                        <div className="form-group">
                            <label className="label-text" htmlFor="password">Password</label>

                            <div style={{ position: 'relative' }}>
                                <input type="password" className="input-field" placeholder="**********" />
                                <img src="./eye-icon.png" className="eye-icon" alt="" height="20" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <input type="checkbox" className="me-3" />
                                <span className="terms-of-service">Remember Me</span>
                            </div>
                            <div className="col text-end">
                                <span style={{ fontSize: '12px' }}>
                                    <Link href="./forgot-password">
                                        <a style={{ color: '#13113F', textDecoration: 'none', fontSize: '12px', fontFamily: 'Rubik' }}>Forgot Password?</a>
                                    </Link>
                                </span>
                            </div>
                        </div>

                        <Link href="/success-pw-reset">
                            <a>
                                <button type="button" className="authentication-btn mt-3">Login</button>
                            </a>
                        </Link>

                    </form>
                </DataCard>
            </div>
        </div>
    )
}

export default Login
