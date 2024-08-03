import React from 'react';
import './bidsBox.scss';

export default function PriceOffers() {
    return (
        <div className='price-offers'>
            <h3>הצעות מחיר</h3>
            <div className='search-bar'>
                <input type='text' placeholder='Search...' />
            </div>
            <div className='project-list'>
                <div className='project'>
                    <span>👤 Project name</span>
                    <span>bid: ₪0000</span>
                </div>
                <div className='project'>
                    <span>👤 Project name</span>
                    <span>bid: ₪0000</span>
                </div>
            </div>
        </div>
    );
}
