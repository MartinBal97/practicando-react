import React from 'react';
import './CreditCard.css'
import visa from '../../assets/visa.png'
import mastercard from '../../assets/mastercard.png'

export default function CreditCard ({type,number,expirationMonth,expirationYear,bank,owner,cssClass}) {


  return (
    <>
    { 
    <div className={cssClass}>
        <img src={(type.toLowerCase() === 'visa' )? visa : mastercard} alt="{card.type}"></img>
        <h3>**** **** **** {number.slice(number.length - 5)}</h3>
        <div className='expBank'>
            <p>Expires {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
        </div>
        <p>{owner}</p>
    </div>
    } 
    </>
  );
}


