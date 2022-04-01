import React from 'react'

const Card = (props) => {
    const { title, cardIcon, priceImpactIcon, walletBalance, priceImpact, priceImpactMessage } = props;
    return (
        <div className="card-container">
            <div className="row">
                <div className="col">
                    <h6 className="grey-text card-title">{title}</h6>
                </div>
                <div className="col text-end">
                    <img src={cardIcon} className="me-2" alt="" height="40" />
                    <img src="./more-icon.png" alt="" height="12" />
                </div>
            </div>
            <p className="wallet-balance">{walletBalance}</p>
            <div className="d-flex">
                <img src={priceImpactIcon} alt="" className="mt-1" height="9" />
                <span className="price-impact">{priceImpact}</span>
            </div>
            <span className="grey-text priceImpactMessage">{priceImpactMessage}</span>
        </div>
    )
}

export default Card