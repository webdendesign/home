import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {placesAmount, listHome} = props;
  return <Main placesAmount={placesAmount} listHome={listHome} />;
};

App.PropTypes = {
  placesAmount: PropTypes.number.isRequired,
  listHome: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;

