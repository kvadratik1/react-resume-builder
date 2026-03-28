import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../src/App.jsx";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});

test("renders heading", () => {
  render(<App />);
  const heading = screen.getByText(/CV Aplication/i);
  expect(heading).toBeInTheDocument();
});
