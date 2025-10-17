import { render, screen } from "@testing-library/react";

import App from "./App";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("Renders the starting page", () => {
    render(<App />);

    expect(screen.getByText("Buttons")).toBeVisible();
    expect(screen.getByText("Card")).toBeVisible();
    expect(screen.getByText("Dropdown")).toBeVisible();
  });
});
