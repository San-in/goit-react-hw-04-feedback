import React from 'react';
import { NotificationMessage } from 'components/Notification/Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <NotificationMessage>{message}</NotificationMessage>;
};
Notification.prototype = {
  message: PropTypes.string.isRequired,
};
