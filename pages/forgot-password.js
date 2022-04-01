import React from 'react'
import DataCard from '../components/DataCard/DataCard';
import Link from 'next/link';
import AuthenticatedLayout from '../components/Layout/Authenticated';

const Login = () => {
    return (
        // <AuthenticatedLayout>
            <div className="authentication-container">
                <div className="logo pb-3">
                    <img src="./logo.png" alt="" height="40" />
                </div>

                <DataCard className="mx-auto">
                    <h4 className="text-center">Forgot your password</h4>
                    <p className="text-center">Enter your email address to get a reset link</p>
                    <form className="form-container">

                        <div className="form-group">
                            <label className="label-text" htmlFor="email">Email Address</label>
                            <input type="text" className="input-field" placeholder="arinze.medu@gmail.com" />
                        </div>
                        <div className="text-end">
                            <Link href="/">
                                <a style={{ fontSize: '12px', color: '#13113F', fontFamily: 'Rubik', textDecoration: 'none' }}>Remember Now?</a>
                            </Link>
                        </div>

                        <Link href="/reset-link">
                            <a><button type="button" className="authentication-btn mt-3">Send Reset Link</button></a>
                        </Link>
                    </form>
                </DataCard>
            </div>
        // </AuthenticatedLayout>
    )
}

export default Login
