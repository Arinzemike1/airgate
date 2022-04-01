import React from 'react';
import UserCard from '../components/UserCard/UserCard';
import AuthenticatedLayout from '../components/Layout/Authenticated';
import Table from '../components/Table/Table';

const headers = ["Transaction ID", "User Data", "Amount", "Charges", "Date", "Status", "Authorized Users", "Reason for Cancellation"];
const data = [
    {
        "Transaction ID": "#674893994903",
        "User Data": "Ferdinand",
        Amount: 500.00,
        Charges: 100.00,
        "Date": "21 Mar 19:30 WAT",
        Status: "Paid",
        "Authorized Users": "Processed by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
        "Reason for Cancellation": "Authorized for payment by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
    },
    {
        "Transaction ID": "#674893994903",
        "User Data": "Ferdinand",
        Amount: 500.00,
        Charges: 100.00,
        "Date": "21 Mar 19:30 WAT",
        Status: "Paid",
        "Authorized Users": "Processed by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
        "Reason for Cancellation": "Authorized for payment by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
    },
    {
        "Transaction ID": "#674893994903",
        "User Data": "Ferdinand",
        Amount: 500.00,
        Charges: 100.00,
        "Date": "21 Mar 19:30 WAT",
        Status: "Paid",
        "Authorized Users": "Processed by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
        "Reason for Cancellation": "Authorized for payment by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
    },
    {
        "Transaction ID": "#674893994903",
        "User Data": "Ferdinand",
        Amount: 500.00,
        Charges: 100.00,
        "Date": "21 Mar 19:30 WAT",
        Status: "Paid",
        "Authorized Users": "Processed by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
        "Reason for Cancellation": "Authorized for payment by Super Admin (2021-12-06, 02:15:18pm) Authorized for final payment by super admin (2021-12-06, 02:06:02pm) Final approval by: Super admin",
    }
]

const Disbursement = () => {
    return (
        <AuthenticatedLayout>
            <UserCard>
                <Table headers={headers} data={data} />
            </UserCard>
        </AuthenticatedLayout>
    )
}

export default Disbursement
