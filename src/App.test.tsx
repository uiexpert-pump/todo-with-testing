import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Todo Application", () => {
  test("renders the todo application", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /todo application/i,
      }),
    ).toBeInTheDocument();
  });

  test("allows user to create a todo", async () => {
    const user = userEvent.setup();

    render(<App />);

    const input = screen.getByRole("textbox", {
      name: /todo/i,
    });

    const addButton = screen.getByRole("button", {
      name: /add todo/i,
    });

    await user.type(input, "Learn Jest");

    await user.click(addButton);

    expect(screen.getByText("Learn Jest")).toBeInTheDocument();
  });

  test("allows user to complete a todo", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(
      screen.getByRole("textbox", {
        name: /todo/i,
      }),
      "Learn React Testing Library",
    );

    await user.click(
      screen.getByRole("button", {
        name: /add todo/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /complete/i,
      }),
    );

    expect(
      screen.getByRole("button", {
        name: /mark incomplete/i,
      }),
    ).toBeInTheDocument();
  });

  test("allows user to delete a todo", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(
      screen.getByRole("textbox", {
        name: /todo/i,
      }),
      "Delete me",
    );

    await user.click(
      screen.getByRole("button", {
        name: /add todo/i,
      }),
    );

    expect(screen.getByText("Delete me")).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", {
        name: /delete/i,
      }),
    );

    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });
});
