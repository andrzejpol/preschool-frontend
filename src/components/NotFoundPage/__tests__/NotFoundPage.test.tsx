import React from "react";
import {render} from "@testing-library/react";
import NotFoundPage from "../NotFoundPage";

describe("NotFoundPage Component", () => {
  it("matches the snapshot", () => {
    const {asFragment} = render(<NotFoundPage/>);

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
