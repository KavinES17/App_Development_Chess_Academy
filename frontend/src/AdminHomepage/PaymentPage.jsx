import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import './PaymentPage.css';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.cardNumber) {
      newErrors.cardNumber = 'Card Number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card Number must be 16 digits';
    }
    if (!formData.cardName) {
      newErrors.cardName = 'Card Name is required';
    }
    if (!formData.expiryDate) {
      newErrors.expiryDate = 'Expiry Date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Expiry Date must be in MM/YY format';
    }
    if (!formData.cvv) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission
      console.log('Payment Submitted', formData);
    }
    setErrors(newErrors);
  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          Payment Details
        </Typography>
        
        <TextField
          label="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          error={!!errors.cardNumber}
          helperText={errors.cardNumber}
          fullWidth
          margin="normal"
        />
        
        <TextField
          label="Name on Card"
          name="cardName"
          value={formData.cardName}
          onChange={handleChange}
          error={!!errors.cardName}
          helperText={errors.cardName}
          fullWidth
          margin="normal"
        />
        
        <TextField
          label="Expiry Date (MM/YY)"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          error={!!errors.expiryDate}
          helperText={errors.expiryDate}
          fullWidth
          margin="normal"
        />
        
        <TextField
          label="CVV"
          name="cvv"
          value={formData.cvv}
          onChange={handleChange}
          error={!!errors.cvv}
          helperText={errors.cvv}
          fullWidth
          margin="normal"
        />
        
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit Payment
        </Button>
      </form>
    </div>
  );
};

export default PaymentPage;
