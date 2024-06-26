/**
 * @jest-environment jsdom
 */
// import { act } from "react"
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);
  expect(screen.getByRole("heading")).toHaveTextContent("Super App Router");
});