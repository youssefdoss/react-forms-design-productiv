import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  // let top = todos.reduce(
  //     (acc, cur) => cur.priority < acc.priority ? cur : acc, todos[0]);
  const prioTodo = todos.reduce(
    (top, curr) => (top.priority || todos[0]) > curr.priority ? top : curr);

  return <Todo  todo={prioTodo}/>;
}

export default TopTodo;