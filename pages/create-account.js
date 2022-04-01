import React from 'react'
import DataCard from '../components/DataCard/DataCard';
import AuthenticatedLayout from '../components/Layout/Authenticated';

const CreateAccount = () => {
    return (
        <AuthenticatedLayout>
        <div className="authentication-container">
            <div className="wrapper">
                <div className="logo pb-3">
                    <img src="./logo.png" alt="" height="40" />
                </div>
                <DataCard className="mx-auto">
                    <h4 className="text-center">Create an Account</h4>
                    <p className="text-center">Create an account to continue</p>
                    <form className="form-container">

                        <div className="form-group">
                            <label className="label-text" htmlFor="email">Email/Phone number</label>
                            <input type="text" name="email" className="input-field" placeholder="arinze.medu@gmail.com" />
                        </div>

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

                        <input type="checkbox" className="me-3" />
                        <span className="terms-of-service">I agree to the
                            <a href=""> Terms of Service</a> and <a href="">Privacy Policy</a>
                        </span>

                        <button type="button" className="authentication-btn mt-3">Create Account</button>
                    </form>
                    <p className="text-center login-link">Already have an account? <a href="">Login</a></p>
                </DataCard>
            </div>
        </div>
        </AuthenticatedLayout>
    )
}

export default CreateAccount
