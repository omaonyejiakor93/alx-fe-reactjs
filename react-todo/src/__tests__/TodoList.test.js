import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(button);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  
  // initial state
  expect(todo).not.toHaveClass("completed");

  // click to toggle
  fireEvent.click(todo);
  expect(todo).toHaveClass("completed");

  // click again to un-toggle
  fireEvent.click(todo);
  expect(todo).not.toHaveClass("completed");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Build a Todo App");
  const deleteButton = screen.getByText("Delete");

  fireEvent.click(deleteButton);

  expect(todo).not.toBeInTheDocument();
});