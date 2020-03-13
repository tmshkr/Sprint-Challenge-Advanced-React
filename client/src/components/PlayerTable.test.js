import React from "react";
import { render, wait } from "@testing-library/react";
import PlayerTable from "./PlayerTable";

it("renders without crashing", () => {
  render(<PlayerTable />);
});

it("displays a table", () => {
  render(<PlayerTable />);
  expect(document.querySelector("table")).toBeTruthy();
});

it("displays rows in tbody", async () => {
  render(<PlayerTable />);
  await wait(() =>
    expect(document.querySelectorAll("tbody > tr").length).toBeGreaterThan(0)
  );
});

it("displays 3 columns in each row of tbody", async () => {
  render(<PlayerTable />);
  await wait(() => {
    const rows = document.querySelectorAll("tbody > tr");
    expect(rows.length).toBeGreaterThan(0);
    rows.forEach(r => {
      expect(r.children.length).toBe(3);
    });
  });
});
