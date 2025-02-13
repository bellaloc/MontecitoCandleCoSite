import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);

    const res = await fetch('/api/checkout_sessions', {
      method: 'POST',
    });

    const { sessionId } = await res.json();

    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? 'Loading...' : 'Checkout with Stripe'}
      </button>
    </div>
  );
};

export default Checkout;
