// src/__tests__/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test("can add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add a todo/i);
    const button = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
  });

  test("can toggle todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    fireEvent.click(todo);

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText(/Delete/i)[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
