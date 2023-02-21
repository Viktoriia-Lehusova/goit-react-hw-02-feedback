import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import { Subtitle } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
  total ? (
    <div>
      <Subtitle>Good: {good}</Subtitle>
      <Subtitle>Neutral: {neutral}</Subtitle>
      <Subtitle>Bad: {bad}</Subtitle>
      <Subtitle>Total: {total}</Subtitle>
      <Subtitle>Positive feedback: {positivePercentage}%</Subtitle>
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
