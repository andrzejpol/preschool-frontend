import React from "react";
import {render} from "@testing-library/react";
import ParentDetailPage from "../ParentDetailPage";

describe("ParentDetailPage Component", () => {
  it("matches the snapshot", () => {
    const {asFragment} = render(<ParentDetailPage/>);

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
