import React from 'react';
import AllButton from './AllButton.js';
import ActiveButton from './ActiveButton.js';
import CompletedButton from './CompletedButton.js';
import NumberofThings from './NumberofThings.js';
const styles = {
  footer:{

  }
};

const Footer = React.createClass({
  render() {
    return (
      <div style = {styles.footer}>
      <NumberofThings />
      <AllButton />
      <ActiveButton />
      <CompletedButton />
      </div>
    )
  }
});

module.exports = Footer;
