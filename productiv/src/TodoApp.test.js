import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { testTodos } from "./_testCommon";


describe("TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos}/>);
  });

  it("successfully deletes todos", function () {
    const result = render(<TodoApp initialTodos={testTodos}/>);
    let deleteButtons = result.queryAllByText('Del');
    const deleteButton = deleteButtons[0];
    expect(deleteButtons.length).toEqual(3);
    fireEvent.click(deleteButton);
    deleteButtons = result.queryAllByText('Del');
    expect(deleteButtons.length).toEqual(2);
  });

  it("changes top todo when top todo is deleted", function () {
    const result = render(<TodoApp initialTodos={testTodos}/>);
    const container = result.container;
    let deleteButton = result.queryAllByText('Del')[1];
    let topTodo = container.querySelector('#topTodo');
    fireEvent.click(deleteButton);
    topTodo = container.querySelector('#topTodo');
    expect(topTodo.innerHTML.includes('Write some code')).toBeTruthy();
  });

  // TODO: Truly no idea how to do this, could use some help
  it('successfully adds todos', function() {

  });

});