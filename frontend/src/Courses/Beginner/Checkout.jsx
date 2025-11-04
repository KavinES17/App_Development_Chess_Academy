import React, { useState } from 'react';

function CheckoutPage() {
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const [billingAddress, setBillingAddress] = useState({}); // Initialize as empty object

  const handleShippingChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  const handleBillingChange = (e) => {
    setBillingAddress({ ...billingAddress, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment processing
    console.log('Shipping Address:', shippingAddress);
    console.log('Billing Address:', billingAddress);
  };

  return (
    <div>
      <h2>Name</h2>
      <form>
        <input type="text" name="name" placeholder="Name" value={shippingAddress.name} onChange={handleShippingChange} />
       
      </form>

      {/* Billing Address (optional) */}
      {/* Conditional rendering for billing address based on checkbox or option */}

      <h2>Payment Information</h2>
      {/* Add payment form elements here */}

      <button type="submit" onClick={handleSubmit}>Checkout</button>
    </div>
  );
}

export default CheckoutPage;
