import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import Register from "../Register";

describe("Register Component", () => {
  it("matches the snapshot", () => {
    const {asFragment} = render(
      <Router>
        <Register/>
      </Router>
    );

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
