import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import AddEventModal from "../AddEventModal";

const mockStore = configureStore([]);

describe("AddEventModal Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it("matches the snapshot", () => {
    const {asFragment} = render(
      <Provider store={store}>
        <AddEventModal onClose={vi.fn()}/>
      </Provider>
    );

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
