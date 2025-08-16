import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Notification = ({ notification }) => {
  const { removeNotification } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeNotification(notification.id);
    }, notification.duration || 5000);

    return () => clearTimeout(timer);
  }, [notification.id, notification.duration, removeNotification]);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: AlertCircle
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  const Icon = icons[notification.type] || AlertCircle;

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.3 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.5, transition: { duration: 0.2 } }}
      className={`
        ${colors[notification.type]} text-white p-4 rounded-lg shadow-lg
        flex items-center space-x-3 min-w-80 max-w-md
      `}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <div className="flex-1">
        <p className="font-semibold">{notification.title}</p>
        {notification.message && (
          <p className="text-sm opacity-90">{notification.message}</p>
        )}
      </div>
      <button
        onClick={() => removeNotification(notification.id)}
        className="text-white hover:text-gray-200 transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const NotificationContainer = () => {
  const { notifications } = useApp();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification key={notification.id} notification={notification} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationContainer;