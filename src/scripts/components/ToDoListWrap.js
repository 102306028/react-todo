import React from 'react';
import CheckAllButton from './CheckAllButton.js';
import InputBox from './InputBox.js';


const styles = {
  wrap:{
    borderBottomStyle:"double",
  

  }

};

const ToDoListWrap = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <CheckAllButton />
        <InputBox />
      </div>
    )
  }
});

module.exports = ToDoListWrap;
