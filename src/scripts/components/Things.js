var React = require('react');
var CheckButton = require('./CheckButton.js');
var DeleteButton = require('./DeleteButton.js');
var ToDoThings = require('./ToDoThings.js');
var TodoActions = require('../actions/TodoActions');
var ReactPropTypes = React.PropTypes;

const styles = {
  thing:{

  }
};

const Things = React.createClass({
  propTypes: {
    className: ReactPropTypes.string,
    id: ReactPropTypes.string,
    placeholder: ReactPropTypes.string,
    onSave: ReactPropTypes.func.isRequired,
    value: ReactPropTypes.string
  },

  render:function() {
    if (Object.keys(this.props.data).length < 1) {
      return null;
    }

    var allTodos = this.props.data;
    var todos = [];
    for (var key in allTodos) {
      todos.push(<ToDoThings key={key} todo={allTodos[key]} />);
    }
    return (
      <div style={styles.thing}>
      <CheckButton />
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>

      <DeleteButton />
      </div>

    )
  }
});

module.exports = Things;
