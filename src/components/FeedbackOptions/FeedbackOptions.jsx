import React from 'react';
import PropTypes from 'prop-types';
import { OptionsList, OptionsButton } from './FeedBackOptions.styled';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <OptionsButton type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </OptionsButton>
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
