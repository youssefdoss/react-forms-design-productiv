import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import { testTodos } from "./_testCommon";

const todo = testTodos[0]

describe("EditableTodo", function() {
  it("renders without crashing", function() {
    render(<EditableTodo todo={todo} />);
  });

  it("contains all elements", function() {
    const result = render(<EditableTodo todo={todo} />);
    expect(result.getByText('Code!')).toBeInTheDocument();
    expect(result.getByText('Write some code')).toBeInTheDocument();
    expect(result.getByText('(priority: 2)')).toBeInTheDocument();
    expect(result.getByText('Edit')).toBeInTheDocument();
    expect(result.getByText('Del')).toBeInTheDocument();
  });

  it('delete button should call remove function', function() {
    const mockRemove = jest.fn();
    expect(mockRemove).toHaveBeenCalledTimes(0);
    const result = render(<EditableTodo todo={todo} remove={mockRemove} />);
    const deleteButton = result.getByText('Del');
    fireEvent.click(deleteButton);
    expect(mockRemove).toHaveBeenCalledTimes(1);
  });

  it('edit button toggles form', function() {
    const result = render(<EditableTodo todo={todo} />);
    expect(result.queryByText('Edit')).toBeInTheDocument();
    expect(result.queryByText('Gø!')).not.toBeInTheDocument();
    const editButton = result.queryByText('Edit');
    fireEvent.click(editButton);
    expect(result.queryByText('Edit')).not.toBeInTheDocument();
    expect(result.queryByText('Gø!')).toBeInTheDocument();
  });
});