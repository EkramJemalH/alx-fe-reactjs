import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Demo Todo 1")).toBeInTheDocument();
    expect(screen.getByText("Demo Todo 2")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todo = screen.getByText("Demo Todo 1");
    
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByTestId("delete-0"); // assign data-testid in TodoList
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Demo Todo 1")).not.toBeInTheDocument();
  });
});
