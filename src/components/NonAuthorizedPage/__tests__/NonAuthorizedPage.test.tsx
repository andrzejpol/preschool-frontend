import React from "react";
import {render} from "@testing-library/react";
import NonAuthorizedPage from "../NonAuthorizedPage";

describe("NotAuthorizedPage Component", () => {
  it("matches the snapshot", () => {
    const {asFragment} = render(<NonAuthorizedPage/>);

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
