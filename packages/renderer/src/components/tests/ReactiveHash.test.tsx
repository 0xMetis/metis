import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import ReactiveHash from "../ReactiveHash";

vi.mock("#preload", () => {
  return {
    sha256sum: vi.fn((s: string) => `${s}:HASHED`),
  };
});

test("ReactiveHash component", async () => {
  render(<ReactiveHash />);

  const dataInput = screen.getByTestId("reactive-hash-raw-value");

  const dataToHashed = Math.random().toString(36).slice(2, 7);

  await userEvent.clear(dataInput);
  await userEvent.type(dataInput, dataToHashed);

  const hashInput = screen.getByTestId("reactive-hash-hashed-value");
  expect(hashInput).toHaveValue(`${dataToHashed}:HASHED`);
});
