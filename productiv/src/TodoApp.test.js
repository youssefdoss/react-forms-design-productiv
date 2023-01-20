import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { testTodos } from "./_testCommon";


describe("TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos}/>);
  });

  it("successfully deletes todos", function () {
    const { container } = render(<TodoApp initialTodos={testTodos}/>);
    console.log("contianer", container);
    const deleteButton = container.getElementsByClassName(`EditableTodo-delBtn ${testTodos[0].id}`);
    const editableTodoList = container.getElementsByClassName("EditableTodoList");
    console.log("editableTodoList",editableTodoList);
    expect(editableTodoList.length).toEqual(3);
    fireEvent.click(deleteButton);
    expect(editableTodoList.length).toEqual(2);

  })


});