import { render, screen, act } from "@testing-library/react";
import { expect, test } from "vitest";
import ReactiveCounter from "../ReactiveCounter";

test("ReactiveHash component", async () => {
  render(<ReactiveCounter />);

  const button = screen.getByTestId("button");

  expect(button.textContent).toBe(" count is: 0");
  act(() => {
    button.click();
  });
  expect(button.textContent).toBe(" count is: 1");
});
