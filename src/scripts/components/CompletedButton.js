import React from 'react';

const styles = {
  buttonstyle:{
    buttonDelete:{
      backgroundColor:"transparent",
      border:"none"
    }
  }
};

const CompletedButton = React.createClass({
  render() {
    return (

      <button type='button' style={styles.buttonDelete}>Completed</button>
    )
  }
});

module.exports = CompletedButton;
