import React from 'react';
import Card from '../components/Card/Card';
import AdminCard from '../components/AdminCard/Admin-card';
import AuthenticatedLayout from '../components/Layout/Authenticated';
import BarChart from '../components/Chart/BarChart';
import { numberWithCommas } from '../lib/Utils';

const Dashboard = () => {
    return (
        <AuthenticatedLayout>
            <div className="row">

                <div className="col-md-3">
                    <Card
                        title="Total Revenue"
                        cardIcon="./revenue-icon.png"
                        walletBalance={`₦${numberWithCommas('50000000')}`}
                        priceImpactIcon="./priceUp-icon.png"
                        priceImpact="+14.3%"
                        priceImpactMessage="Up from yesterday"
                    />
                </div>

                <div className="col-md-3">
                    <Card
                        title="Total Transactions"
                        cardIcon="./transaction-icon.png"
                        walletBalance="3000"
                        priceImpactIcon="./priceUp-icon.png"
                        priceImpact="+14.3%"
                        priceImpactMessage="Up from yesterday"
                    />
                </div>

                <div className="col-md-3">
                    <Card
                        title="No. of Merchants"
                        cardIcon="./merchant-icon.png"
                        walletBalance="2000"
                        priceImpactIcon="./priceUp-icon.png"
                        priceImpact="+14.3%"
                        priceImpactMessage="Up from yesterday"
                    />
                </div>

                <div className="col-md-3">
                    <Card
                        title="No. of Gateways"
                        cardIcon="./gateway-icon.png"
                        walletBalance="46"
                        priceImpactIcon="./priceUp-icon.png"
                        priceImpact="+14.3%"
                        priceImpactMessage="Up from yesterday"
                    />
                </div>

            </div>


            <div className="row mt-4">
                <div className="col-md-9">
                    <BarChart />

                    <div className="row mt-4">

                        <div className="col-md-3">
                            <Card
                                title="Total Chargebacks"
                                cardIcon="./refresh-icon.png"
                                walletBalance={`₦1.2M`}
                                priceImpactIcon="./priceUp-icon.png"
                                priceImpact="+14.3%"
                                priceImpactMessage="Up from yesterday"
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                title="No. of Chargebacks"
                                cardIcon="./refresh-icon.png"
                                walletBalance="7"
                                priceImpactIcon="./priceUp-icon.png"
                                priceImpact="+14.3%"
                                priceImpactMessage="Up from yesterday"
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                title="Pending Transactions"
                                cardIcon="./transaction-icon.png"
                                walletBalance="4"
                                priceImpactIcon="./priceUp-icon.png"
                                priceImpact="+14.3%"
                                priceImpactMessage="Up from yesterday"
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                title="Failed Transactions"
                                cardIcon="./transaction-icon.png"
                                walletBalance="0"
                                priceImpactIcon="./priceUp-icon.png"
                                priceImpact="+14.3%"
                                priceImpactMessage="Up from yesterday"
                            />
                        </div>
                    </div>

                </div>
                <div className="col-md-3">
                    <Card
                        title="Total Amount"
                        cardIcon="./transaction-icon.png"
                        walletBalance={`₦${numberWithCommas('50000000')}`}
                        priceImpactIcon="./priceUp-icon.png"
                        priceImpact="+14.3%"
                        priceImpactMessage="Up from yesterday"
                    />

                    <AdminCard />

                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Dashboard
