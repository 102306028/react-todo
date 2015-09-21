var React = require('react');
import Radium from 'radium';
import Things from './Things.js';
import CheckButton from './CheckButton.js';
import DeleteButton from './DeleteButton.js';
const styles = {
  thing:{
    width: '100%',
    height: 60,
    display: 'flex',
    borderBottom: '1px solid #DDD'
  }
};
const T = React.PropTypes;
const ToDoElements = React.createClass({

  propTypes: {
     todo: T.object.isRequired
   },
  render() {
    return (
      <div style={styles.thing}>
      <CheckButton isChecked={this.props.todo.checked} todoId={this.props.todo.id} />
      <Things content={this.props.todo.content} />
      <DeleteButton todoId={this.props.todo.id} />
      </div>

    )
  },

});

module.exports = Radium(ToDoElements);
