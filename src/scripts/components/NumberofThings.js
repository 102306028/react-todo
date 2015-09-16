import React from 'react';

const styles = {
  title:{
    fontSize:"12px",
    textAlign:"center"
  }
};

const NumberofThings = React.createClass({
  render() {
    return (

      <text style = {styles.title}>1 thing left</text>

    )
  }
});

module.exports = NumberofThings;
