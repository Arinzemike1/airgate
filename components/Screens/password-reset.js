import React from 'react';
import DataCard from '../DataCard/DataCard';

const PasswordReset = () => {
    return (
        <div className="authentication-container">
            <div className="logo pb-3">
                <img src="./logo.png" alt="" height="40" />
            </div>
            <DataCard className="text-center mx-auto">
                <h4>Password Reset</h4>
                <p>You will now be redirected...</p>
            </DataCard>
        </div>
    )
}

export default PasswordReset
