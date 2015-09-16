import React from 'react';

const styles = {
  buttonstyle:{
    buttonDelete:{
      backgroundColor:"transparent",
      border:"none"
    }
  }
};

const AllButton = React.createClass({
  render() {
    return (

      <button type='button' style={styles.buttonDelete}>All</button>
    )
  }
});

module.exports = AllButton;
