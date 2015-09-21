import React from 'react';
import Radium from 'radium';
import ToDoActions from '../actions/ToDoActions';
import ToDoStore from '../stores/ToDoStore';
const styles = {
  wrap: {
      width: 60,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  buttonstyle:{
    //backgroundColor: 'transparent',
    color: '#AAA',
    border: 0,
    outline: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    borderRadius: '36px',
    width: '36px',
    height: '36px',
    opacity: .1,
    ':hover': {
      opacity: 1
    }
  }
};

const DeleteButton = React.createClass({
  remove() {
      ToDoActions.remove(this.props.todoId);
    },
  render() {
    return (
      <div style={styles.wrap}>
      <button type='button' onClick={this.remove} style={styles.buttonstyle}>
      <span calssName = 'fa fa-times'></span>
      </button>
      </div>
    )
  }
});

module.exports = Radium(DeleteButton);
