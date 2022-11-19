import React from 'react';
import propTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.buttonList}>
    {options.map(option => (
      <li key={option}>
        <button
          className={css.button}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  options: propTypes.array,
  onLeaveFeedback: propTypes.func,
};
