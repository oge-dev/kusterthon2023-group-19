// PaymentReceived.js
import React from 'react';
import Alerts from './Alerts'; // Adjust the path based on your project structure

const PaymentReceived = () => {
  const handlePaymentReceived = () => {
    // Trigger an alert for payment received
    Alerts.addAlert('Payment received for Invoice #123', 'success');
  };

  return (
    <div>
      {/* Your payment received content */}
      <button onClick={handlePaymentReceived}>Receive Payment</button>
    </div>
  );
};

export default PaymentReceived;
