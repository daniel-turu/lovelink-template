import React, { useState } from 'react';

interface PushNotificationButtonProps {
  interest: string;
}

const PushNotificationButton: React.FC<PushNotificationButtonProps> = ({ interest }) => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);

    // Send message to parent when button is clicked
    window.parent.postMessage("buttonClickedInIframe", "*");

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleButtonClick}
        className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full shadow-md hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-pink-300"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Subscribe to Notifications'}
      </button>
    </div>
  );
};

export default PushNotificationButton;
