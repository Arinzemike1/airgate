import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { numberWithCommas } from '../../lib/Utils';

// ChartJS.register(
//     BarElement,
//     CategoryScale,
//     LinearScale
// )

const data = {
    labels: ['Jan 2019', 'Feb 2019', 'Mar 2019', 'Apr 2019', 'May 2019', 'Jun 2019', 'Jul 2019', 'Aug 2019', 'Sep 2019'],
    datasets: [{
        label: '',
        data: [12, 19, 15, 10, 12, 9, 17, 10, 13],
        backgroundColor: '#100658',
        borderWidth: 1,
        borderRadius: 15,
    }]
}
const options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }],
        xAxes: [{
            barPercentage: 0.4,
            gridLines: {
                display: false
            }
        }]
    }
}

const BarChart = () => {
    return (
        <div className="bar-chart">

            <div className="row">
                <div className="col-md-6">
                    <h6 className="grey-text card-title">Total Revenue</h6>
                    <p className="wallet-balance mt-1">{`₦${numberWithCommas('50000000')}`}</p>
                    <div className="d-flex price-indicators mb-4">
                        <img src="./priceUp-icon.png" className="mt-1" alt="" height="9" />
                        <span className="price-impact">+71.3%</span>
                    </div>
                </div>

                <div className="col-md-6 text-end d-flex justify-content-end">
                    <p className="me-2">Monthly</p> 
                    <span><img src="./arrow-down.png" alt="" className="me-4" height="5" /></span>
                </div>
            </div>



            <Bar
                height={170}
                data={data}
                options={options}
            />
        </div>
    )
}

export default BarChart
