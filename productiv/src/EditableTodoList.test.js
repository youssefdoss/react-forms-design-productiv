import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";
import { testTodos } from "./_testCommon";

describe("EditableTodoList", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={testTodos}/>);
  });

  it("displays all todos", function () {
    const result  = render(<EditableTodoList todos={testTodos}/>);
    const container = result.container;
    expect(container.getElementsByClassName("EditableTodoList").length).toEqual(1);
    expect(result.queryByText("Write some code")).toBeInTheDocument();
    expect(result.queryByText("Cook something healthy")).toBeInTheDocument();
    expect(result.queryByText("In bed by 11:15")).toBeInTheDocument();
  });
});