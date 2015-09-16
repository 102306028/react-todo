var React = require('react');
var ToDoListWrap = require('./ToDoListWrap.js');
var Things = require('./Things.js');
var TitleName = require('./TitleName.js');
var Footer = require('./Footer.js');
var TodoStore = require('../stores/TodoStore');
const styles = {
  all:{
    backgroundColor:"#FFF",
    width: "600px",
    height: "600px"
  }
};

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

const ToDoList = React.createClass({
  getInitialState: function() {
  return getTodoState();
},

componentDidMount: function() {
  TodoStore.addChangeListener(this._onChange);
},

componentWillUnmount: function() {
  TodoStore.removeChangeListener(this._onChange);
},

  render() {
    return (
      <div style={styles.all}>
      <TitleName />
      <ToDoListWrap />
      <Things data = {this.state} />
      <Footer data={this.state} />
      </div>
    )
  },
  _onChange: function() {
    this.setState(getTodoState());
  }
});

module.exports = ToDoList;
