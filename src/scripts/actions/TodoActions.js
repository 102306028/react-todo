/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants.js');
import qs from 'querystring';
var TodoActions = {
  fetch() {
     const req = new XMLHttpRequest();
     req.open('GET', '/api/todos');
     req.responseType = 'json';
     req.onreadystatechange = function () {
       if (req.readyState !== 4 || req.status !== 200) return;

       AppDispatcher.dispatch({
         todos: req.response,
         action: TodoConstants.TODO_FETCHED,
       });
     };
     req.send();
   },

   add(content) {
     const data = qs.stringify({
       content: content
     });

     const req = new XMLHttpRequest();
     req.open('POST', '/api/todos');
     req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     req.responseType = 'json';
     req.onreadystatechange = function () {
       if (req.readyState !== 4 || req.status !== 201) return;

       AppDispatcher.dispatch({
         id: req.response.id,
         content: content,
         action: TodoConstants.TODO_ADDED,
       });
     };
     req.send(data);
   },

   remove(todoId) {
     const req = new XMLHttpRequest();
     req.open('DELETE', '/api/todos/' + todoId);
     req.responseType = 'json';
     req.onreadystatechange = function () {
       if (req.readyState !== 4 || req.status !== 204) return;

       AppDispatcher.dispatch({
         todoId: todoId,
         action: TodoConstants.TODO_REMOVED,
       });
     };
     req.send();
   },

   toggleCheck(todoId) {
     const req = new XMLHttpRequest();
     req.open('PATCH', '/api/todos/' + todoId + '/toggleCheck');
     req.responseType = 'json';
     req.onreadystatechange = function () {
       if (req.readyState !== 4 || req.status !== 204) return;

       AppDispatcher.dispatch({
         todoId: todoId,
         action: TodoConstants.TODO_TOGGLE_CHECK,
       });
     };
     req.send();
   }
 };

 export default TodoActions;
