var React = require('react');
var ToDoListWrap = require('./ToDoListWrap.js');
var ToDoElements = require('./ToDoElements.js');
var TitleName = require('./TitleName.js');
var Footer = require('./Footer.js');
var ToDoStore = require('../stores/ToDoStore');
import ToDoActions  from '../actions/ToDoActions';
const styles = {
  all:{
    width: 600,
    border: '1px solid #DDD',
  }
};



const ToDoList = React.createClass({
  getInitialState() {
    return {
      todos: ToDoStore.getTodos(),
      collpased: false
    }
  },

  componentDidMount() {
    ToDoStore.addChangeListener(this.todoUpdate);

    ToDoActions.fetch();
  },

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this.todoUpdate);
  },

  todoUpdate() {
    this.setState({
      todos: ToDoStore.getTodos()
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
        return <ToDoElements todo={todo} />
      })}
      <Footer />
      </div>
    )
  }
});

module.exports = ToDoList;
