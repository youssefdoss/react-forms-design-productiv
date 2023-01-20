import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("TodoForm", function() {
  it('renders without crashing', function() {
    render(<TodoForm handleSave={jest.fn} />);
  });

  it('renders correct HTML', function() {
    const result = render(<TodoForm handleSave={jest.fn} />);
    const container = result.container;
    expect(container.querySelector('input')).toHaveAttribute('placeholder', 'Title');
    expect(container.querySelector('textarea')).toHaveAttribute('placeholder', 'Description');
    expect(container.querySelector('select')).toHaveAttribute('name', 'priority');
  });
});