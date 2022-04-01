import React from 'react';
import DataCard from '../components/DataCard/DataCard';
import Link from 'next/link';

const ResetLink = () => {
    return (
        <div className="authentication-container pt-5">
            <div className="logo pb-3">
                <img src="./logo.png" alt="" height="40" />
            </div>
            <DataCard className="mx-auto" style={{ padding: '40px 100px', width: '40rem' }}>
                <h4 style={{ fontsize: '24px' }}>Reset Link Sent!</h4>
                <p style={{ fontSize: '16px', width: '100%' }}>
                    We’ve sent an email to ferdnardjohn@email.com with a
                    link to reset your password. Not you? <Link href="/forgot-password"><a>change email address</a></Link> <br />
                    Didn’t get the mail? Kindly confirm your email address and <a href="">Resend</a>
                </p>
            </DataCard>
        </div>
    )
}

export default ResetLink
