import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total ? (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback:{positivePercentage}%</p>
    </div>
  ) : (
    <Notification message="There is no feedback" />
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
