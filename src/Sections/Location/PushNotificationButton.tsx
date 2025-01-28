import React, { useState } from 'react';
import * as PusherPushNotifications from '@pusher/push-notifications-web';

interface PushNotificationButtonProps {
  interest: string;
}

const PushNotificationButton: React.FC<PushNotificationButtonProps> = ({ interest }) => {
  // Track subscription state
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: '25a831f5-e8bc-4f03-96bf-15137f956d75',
    });

    setLoading(true);  // Set loading state while subscribing

    beamsClient
      .start()
      .then(() => beamsClient.addDeviceInterest(interest))
      .then(() => {
        console.log('Successfully registered and subscribed!');
        setSubscribed(true);  // Mark as subscribed on success
        setLoading(false);    // Remove loading state
      })
      .catch((error) => {
        console.error('Subscription failed', error);
        setLoading(false);    // Remove loading state
      });
  };

  const handleButtonClick = () => {
    window.parent.postMessage("buttonClicked", "*");  // Send the message to the parent
};

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleButtonClick}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300"
        disabled={loading || subscribed}  // Disable button while subscribing or if already subscribed
      >
        {loading
          ? 'Subscribing...'  // Show loading text
          : subscribed
          ? 'Subscribed!'  // Show success text after subscription
          : 'Subscribe to Notifications'  // Default text
        }
      </button>
    </div>
  );
};

export default PushNotificationButton;
