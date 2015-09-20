import React from 'react';
import CheckAllButton from './CheckAllButton.js';
import InputBox from './InputBox.js';


const styles = {
  wrap:{
    display: 'flex',
    height: 60,
    lineHeight: '60px',
    borderBottom: '1px solid #aaa',


  }

};

const ToDoListWrap = React.createClass({
  render() {
    return (
      <div style={styles.wrap}>
        <CheckAllButton isCheckall={this.props.isCheckall} toggleCollpse={this.props.toggleCollpse} />
        <InputBox />
      </div>
    )
  }
});

module.exports = ToDoListWrap;
