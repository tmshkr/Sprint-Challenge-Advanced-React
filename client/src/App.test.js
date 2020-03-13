import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

it("toggles dark-mode class on document.body", () => {
  const { getByText } = render(<App />);

  // toggle dark mode on
  fireEvent.click(getByText(/mode/i));
  expect(document.body.className).toBe("dark-mode");

  // toggle dark mode off
  fireEvent.click(getByText(/mode/i));
  expect(document.body.className).toBe("");
});

it("persists dark-mode to localStorage", () => {
  const { getByText } = render(<App />);

  // toggle dark mode on
  fireEvent.click(getByText(/mode/i));
  expect(localStorage.getItem("dark-mode")).toBe("true");

  // toggle dark mode off
  fireEvent.click(getByText(/mode/i));
  expect(localStorage.getItem("dark-mode")).toBe("false");
});
