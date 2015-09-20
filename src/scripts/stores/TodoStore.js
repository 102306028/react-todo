import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {EventEmitter} from 'events';
import TodoConstants from '../constants/TodoConstants.js';
import assign from 'object-assign';
import _ from 'lodash';

const CHANGE_EVENT = 'change';

let _todos = [];

const TodoStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    return this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(listener) {
    return this.removeListener(CHANGE_EVENT, listener);
  },

  getTodos() {
    return _todos;
  }
});

AppDispatcher.register((payload) => {
  const action = payload.action;

  switch (action) {
    case TodoConstants.TODO_FETCHED:
      _todos = payload.todos;

      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_ADDED:
      _todos.push({
        id: payload.id,
        content: payload.content,
        checked: false
      });

      TodoStore.emitChange();
      break;

    case TodoConstants.TODO_REMOVED:
      var todoIndex = _.findIndex(_todos, {
        id: payload.todoId
      });

      if (~todoIndex) {
        _todos.splice(todoIndex, 1);
        TodoStore.emitChange();
      }
      break;

    case TodoConstants.TODO_TOGGLE_CHECK:
      var todo = _.find(_todos, {
        id: payload.todoId
      });

      if (todo) {
        todo.checked = !todo.checked;
        TodoStore.emitChange();
      }
      break;
  }

  return true;
});

export default TodoStore;
