import React from "react";
import { render } from "@testing-library/react";
import PlayerTable from "./PlayerTable";

it("renders without crashing", () => {
  render(<PlayerTable />);
});

it("displays a table", () => {
  render(<PlayerTable />);
  expect(document.querySelector("table")).toBeTruthy();
});
