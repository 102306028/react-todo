import React from 'react';

const styles = {
  buttonstyle:{
    checkbuttonstyle:{
      width:"50px",
      backgroundColor:"transparent",
      border:"none"
    }
  }
};

const CheckButton = React.createClass({
  render() {
    return (

        <button type='button' style={styles.checkbuttonstyle} className="fa fa-check" />

    )
  }
});

module.exports = CheckButton;
