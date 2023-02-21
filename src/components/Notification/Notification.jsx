import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <div>
      <Title>{message}</Title>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
