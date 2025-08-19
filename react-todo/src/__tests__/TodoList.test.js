import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByTestId("new-todo-input");
    const button = screen.getByTestId("add-todo-button");

    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    expect(todo).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId("delete-1");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
