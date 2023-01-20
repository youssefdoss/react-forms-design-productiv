import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import { testTodos } from "./_testCommon";

//TODO: mock functions to test & fix names
describe("EditableTodoList", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={testTodos}/>);
  });

  it("contains EditableTodoList", function () {
    const result  = render(<TodoApp initialTodos={testTodos}/>);
    const container = result.container;
    expect(container.getElementsByClassName("EditableTodoList").length).toEqual(1);
    expect(result.queryByText("Write some code")).toBeInTheDocument();
  })


});