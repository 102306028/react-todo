import React from 'react';

const styles = {
  buttonstyle:{
    buttonDelete:{
      backgroundColor:"transparent",
      border:"none"
    }
  }
};

const ActiveButton = React.createClass({
  render() {
    return (

      <button type='button' style={styles.buttonDelete}>Active</button>
    )
  }
});

module.exports = ActiveButton;
