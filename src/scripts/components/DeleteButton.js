import React from 'react';

const styles = {
  buttonstyle:{
    buttonDelete:{
      backgroundColor:"transparent",
      border:"none" 
    }
  }
};

const DeleteButton = React.createClass({
  render() {
    return (

      <button type='button' style={styles.buttonDelete} className="fa fa-times" />
    )
  }
});

module.exports = DeleteButton;
