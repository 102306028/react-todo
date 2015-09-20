var React = require('react');
var ToDoListWrap = require('./ToDoListWrap.js');
var ToDoThings = require('./ToDoThings.js');
var TitleName = require('./TitleName.js');
var Footer = require('./Footer.js');
var TodoStore = require('../stores/TodoStore');
import TodoActions  from '../actions/TodoActions';
const styles = {
  all:{
    width: 600,
    border: '1px solid #DDD',
  }
};



const ToDoList = React.createClass({
  getInitialState() {
    return {
      todos: TodoStore.getTodos(),
      collpased: false
    }
  },

  componentDidMount() {
    TodoStore.addChangeListener(this.todoUpdate);

    TodoActions.fetch();
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate() {
    this.setState({
      todos: TodoStore.getTodos()
    });
  },

  toggleCollapse() {
    this.setState({
      collpased: !this.state.collpased
    });
  },

  render() {
    const list = this.state.collpased ? [] : this.state.todos;
    return (
      <div style={styles.all}>
      <TitleName />
      <ToDoListWrap isCollapsed={this.state.collpased} toggleCollapse={this.toggleCollapse}/>
      {list.map((todo) =>{
        return <ToDoThings todo={todo}/>
      })}
      <Footer />
      </div>
    )
  }
});

module.exports = ToDoList;
