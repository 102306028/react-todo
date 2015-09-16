import React from 'react';

const styles = {
  title:{
    fontSize:"100px",
    textAlign:"center"
  }
};

const TitleName = React.createClass({
  render() {
    return (
      <div style = {styles.title}>
      todos
      </div>
    )
  }
});

module.exports = TitleName;
