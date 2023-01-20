import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import { testTodos } from "./_testCommon";

const todo = testTodos[0];

describe('Todo', function() {
  it('renders without crashing', function() {
    render(<Todo todo={todo} />);
  });

  it('renders with correct HTML', function() {
    const result = render(<Todo todo={todo} />);
    expect(result.getByText('Code!')).toBeInTheDocument();
    expect(result.getByText('Write some code')).toBeInTheDocument();
    expect(result.getByText('(priority: 2)')).toBeInTheDocument();
  });
});