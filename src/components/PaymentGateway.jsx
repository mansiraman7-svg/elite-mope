import { useEffect, useState } from 'react';

export function PaymentGateway({ course, amount, courseName }) {
  const [status, setStatus] = useState('Waiting for secure checkout');
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const keyId = import.meta.env.VITE_RAZORPAY_KEY_ID;
  const mode = import.meta.env.VITE_PAYMENT_MODE || 'test';

  useEffect(() => {
    if (keyId) {
      setIsReady(true);
    } else {
      setStatus('Test mode is configured but no Razorpay key has been added yet. Add VITE_RAZORPAY_KEY_ID in .env.');
      setIsReady(false);
    }
  }, [keyId]);

  const loadRazorpay = async () => {
    if (!window.Razorpay) {
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = resolve;
        script.onerror = () => reject(new Error('Could not load Razorpay script'));
        document.body.appendChild(script);
      });
    }
  };

  const handleCheckout = async () => {
    if (!keyId) {
      setStatus('No payment key configured. Add Razorpay test key to enable checkout.');
      return;
    }

    if (mode !== 'test') {
      setStatus('Production mode is not enabled in this repo. Keep payment in test mode until the secure backend is configured.');
      return;
    }

    try {
      setIsLoading(true);
      setStatus('Preparing secure test checkout...');
      await loadRazorpay();

      const options = {
        key: keyId,
        amount: Number(amount) * 100,
        currency: 'INR',
        name: 'Elite Mope by MD',
        description: `${courseName || course?.title || 'Course enrollment'} – test checkout`,
        image: '/favicon.svg',
        handler: function () {
          setStatus('Payment attempt completed through Razorpay test checkout. No live charge was made in test mode.');
        },
        modal: {
          ondismiss: function () {
            setStatus('Checkout was closed before completion. No charge was processed.');
          },
        },
        theme: {
          color: '#4d1d23',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setStatus('Checkout window opened. Use Razorpay test credentials to continue.');
    } catch (error) {
      setStatus('Checkout failed to initialize. Check the Razorpay key and network connection.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="payment-box">
      <div className="payment-topline">
        <strong>{course?.priceLabel || `₹${amount}`}</strong>
        <span>{mode === 'test' ? 'Test mode' : 'Live mode disabled'}</span>
      </div>

      <p className="payment-status">{status}</p>

      <button className="primary-btn full" onClick={handleCheckout} disabled={isLoading || !isReady}>
        {isLoading ? 'Processing...' : 'Secure checkout'}
      </button>

      <small>
        Test mode only. Do not enter real payment credentials unless this project has a validated backend and production keys.
      </small>
    </div>
  );
}
