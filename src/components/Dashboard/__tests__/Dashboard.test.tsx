import React from "react";
import {render} from "@testing-library/react";
import Dashboard from "../Dashboard";

vi.mock("../UserCard", () => ({
  default: ({type}) => <div>Mocked UserCard: {type}</div>,
}));

vi.mock("../CountChart", () => ({
  default: () => <div>Mocked CountChart</div>,
}));

vi.mock("../AttendanceChart", () => ({
  default: () => <div>Mocked AttendanceChart</div>,
}));

vi.mock("../EventCalendar", () => ({
  default: () => <div>Mocked EventCalendar</div>,
}));

describe("Dashboard Component", () => {
  it("matches the snapshot", () => {
    const {asFragment} = render(<Dashboard/>);

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
