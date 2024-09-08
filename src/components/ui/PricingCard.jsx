import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ className, title, price, period, features, buttonText, onButtonClick, navigateTo }) => {
    return (
        <div className={`border border-gray-300 rounded-md p-6 ${className}`}>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="text-4xl my-6">{price}<span className="text-base">/{period}</span></p>
            <ul className="flex flex-col my-3 mx-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <p>{feature}</p>
                    </li>
                ))}
            </ul>
            {/* Add navite to path without / skipping onButtonClick will default to this */}
            {navigateTo && (
                <button className="bg-black text-white w-full text-xl font-semibold hover:bg-gray-800 transition duration-250">
                    <Link to={'/' + navigateTo} className='bg-black flex p-3 justify-center w-full'>{buttonText}</Link>
                </button>
            )}
            {!navigateTo && (
                <button
                    className="bg-black text-white w-full p-3 text-xl font-semibold hover:bg-gray-800 transition duration-250"
                    onClick={onButtonClick}
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default PricingCard;
