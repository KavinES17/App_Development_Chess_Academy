import React from 'react'
import './Payment.css'
import image1 from './chess.png'

const Payment = () => {
  return (
    <div className='thebackground'>
    <div className='qrcode'>
    <img src={image1} style={{height:"120px",width:"120px",borderRadius:"140px"}}/>
    <h2>Chess Academy Payment</h2>
    </div>
    </div>
  )
}

export default Payment