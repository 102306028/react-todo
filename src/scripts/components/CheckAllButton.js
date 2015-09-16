import React from 'react';

const styles = {
  buttonstyle:{
    width:"50px",
    height:"40px",
    backgroundColor:"transparent",
    border:"none"
  }
};

const CheckAllButton = React.createClass({
  render() {
    return (

        <button type='button' style={styles.buttonstyle} className="fa fa-check" />

    )
  }
});

module.exports = CheckAllButton;
