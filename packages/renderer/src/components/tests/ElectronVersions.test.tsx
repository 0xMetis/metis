import { render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import ElectronVersions from "../ElectronVersions";

vi.mock("#preload", () => {
  return {
    versions: { lib1: 1, lib2: 2 },
  };
});

test("ElectronVersions component", async () => {
  render(<ElectronVersions />);

  expect(await screen.findByText("lib1 :")).toBeVisible();
  expect(await screen.findByText("v1")).toBeVisible();

  expect(await screen.findByText("lib2 :")).toBeVisible();
  expect(await screen.findByText("v2")).toBeVisible();
});
