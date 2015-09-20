var React = require('react');
import TodoStore from '../stores/TodoStore.js';
var TodoActions = require('../actions/TodoActions.js');
const styles = {
  wrap: {
    flex: 1
  },
  textbox:{
    height: 56,
    outline: 'none',
    fontSize: '1.25rem',
    width: '100%',
    border: 0,
    boxSizing: 'border-box'
  }

};

const InputBox= React.createClass({

  getInitialState() {
      return {
        content: ''
      }
    },
    componentDidMount() {
    TodoStore.addChangeListener(this.todoUpdate);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate() {
    this.setState({
      content: ''
    });
  },

  handleContent(e) {
    this.setState({
      content: e.target.value
    });
  },

  submit(e) {
    if (e.keyCode === 13 && this.state.content) {
      TodoActions.add(this.state.content);
    }
  },
  render() {
    return (
      <div style={styles.wrap}>
    <input
    value={this.state.content}
    onKeyUp={this.submit}
    onChange={this.handleContent}
    type='text'
      style= {styles.textbox}
      placeholder="What needs to be done?"
    />
    </div>
    )

  },



});

module.exports = InputBox;
