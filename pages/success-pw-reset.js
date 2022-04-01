import React from 'react'
import DataCard from '../components/DataCard/DataCard'
import Link from 'next/link';

const SuccessPwReset = () => {
    return (
        <div className="authentication-container">
            <div className="logo pb-3">
                <img src="./logo.png" alt="" height="40" />
            </div>
            <DataCard className="text-center mx-auto">
                <img src="./success-icon.png" alt="" width="100" height="100" />
                <h4 className="mt-3">Welcome, Arinze!</h4>
                <p>You're now signed in as an admin!</p>

                <Link href="./dashboard">
                    <a>
                        <button className="w-75 authentication-btn mt-3">Continue</button>
                    </a>
                </Link>
            </DataCard>
        </div>
    )
}

export default SuccessPwReset
