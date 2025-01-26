import React from "react";
import {render} from "@testing-library/react";
import EventCalendar from "../EventCalendar";

vi.mock("react-calendar", () => ({
  default: ({onChange, value}) => (
    <div>
      Mocked Calendar Component - Selected Date: {value.toString()}
      <button onClick={() => onChange(new Date())}>Change Date</button>
    </div>
  ),
}));

describe("EventCalendar Component", () => {
  it("matches the snapshot", () => {
    const {asFragment} = render(<EventCalendar/>);

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
