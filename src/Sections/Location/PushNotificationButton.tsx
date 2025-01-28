import React from 'react';
import * as PusherPushNotifications from '@pusher/push-notifications-web';


interface PushNotificationButtonProps {
    interest: string;
  }
  
  const PushNotificationButton: React.FC<PushNotificationButtonProps> = ({ interest }) => {
  const handleSubscribe = () => {
    const beamsClient = new PusherPushNotifications.Client({
      instanceId: '25a831f5-e8bc-4f03-96bf-15137f956d75',
    });

    beamsClient
      .start()
      .then(() => beamsClient.addDeviceInterest(interest))
      .then(() => console.log('Successfully registered and subscribed!'))
      .catch(console.error);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleSubscribe}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300"
      >
        Subscribe to Notifications
      </button>
    </div>
  );
};

export default PushNotificationButton;
