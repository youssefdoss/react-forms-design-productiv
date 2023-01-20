import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { testTodos } from "./_testCommon";

describe('TopTodo', function() {
  it('renders without crashing', function() {
    render(<TopTodo todos={testTodos} />);
  });

  it('displays the correct top todo', function() {
    const result = render(<TopTodo todos={testTodos} />);
    expect(result.queryByText('Make dinner')).toBeInTheDocument();
    expect(result.queryByText('Code!')).not.toBeInTheDocument();
    expect(result.queryByText('Go to bed')).not.toBeInTheDocument();
  });

  it('displays all elements', function() {
    const result = render(<TopTodo todos={testTodos} />);
    expect(result.queryByText('Make dinner')).toBeInTheDocument();
    expect(result.queryByText('(priority: 1)')).toBeInTheDocument();
    expect(result.queryByText('Cook something healthy')).toBeInTheDocument();
  });
});