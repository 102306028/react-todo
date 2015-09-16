var React = require('react');
var ENTER_KEY_CODE = 13;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoActions = require('../actions/TodoActions');
const styles = {
  textbox:{
    flex:"1",
    width:"520px",
    height:"40px"
  }

};

const InputBox= React.createClass({

  getInitialState: function() {
      return {
        value: this.props.value || ''
      };
    },

  render() {
    return (

    <input
      style= {styles.textbox}
      placeholder="What needs to be done?"
      className={this.props.className}
        id="new-todo"
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
        onSave={this._onSave}
    />

    )

  },
  _onSave: function(text) {
   if (text.trim()){
     AppDispatcher.dispatch({
       actionType: 'TODO_CREATE',
       text: text
     });
   }
 },
  _save: function() {
    this._onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  _onChange: function(/*object*/ event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }


});

module.exports = InputBox;
