import React from "react";
import {render, screen} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import Logout from "../Logout";

vi.mock("../../../authService.ts", () => ({
  logout: vi.fn(),
}));

describe("Logout Component", () => {
  it("renders the logout message", () => {
    render(
      <Router>
        <Logout/>
      </Router>
    );

    // Check if the logout message is displayed
    expect(screen.getByText("Trwa wylogowywanie...")).toBeInTheDocument();
  });
});
