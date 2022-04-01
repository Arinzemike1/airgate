import React from 'react'
// import '../styles/_authentication.scss';
import DataCard from '../components/DataCard/DataCard';

const ResetPassword = () => {
    return (
        <div className="authentication-container">
            <div className="wrapper">
                <div className="logo pb-3">
                    <img src="./logo.png" alt="" height="40" />
                </div>
                <DataCard className="mx-auto">
                    <h4 className="text-center">Reset Your Password</h4>
                    <p className="text-center">Enter your new password</p>
                    <form className="form-container">

                        <div className="form-group">
                            <label className="label-text" htmlFor="password">Password</label>

                            <div style={{ position: 'relative' }}>
                                <input type="password" className="input-field" placeholder="**********" />
                                <img src="./eye-icon.png" className="eye-icon" alt="" height="20" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="label-text" htmlFor="password">Confirm Password</label>

                            <div style={{ position: 'relative' }}>
                                <input type="password" className="input-field" placeholder="**********" />
                                <img src="./eye-icon.png" className="eye-icon" alt="" height="20" />
                            </div>
                        </div>

                        <p style={{ fontSize: '12px', color: '#9b9b9b' }}>Password must contain a minimum of 8 characters, with  an uppercase letter, a lowercase letter, a number and a special character.</p>


                        <button type="button" className="authentication-btn mt-3">Update Password</button>
                    </form>
                </DataCard>
            </div>
        </div>
    )
}

export default ResetPassword
