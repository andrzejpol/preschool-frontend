import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Navbar from "../Navbar";

const mockStore = configureStore([]);

describe("Navbar Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      userData: {
        userFirstName: "John",
        userRole: "Admin",
      },
    });
  });

  it("matches the snapshot", () => {
    const {asFragment} = render(
      <Provider store={store}>
        <Navbar/>
      </Provider>
    );

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
