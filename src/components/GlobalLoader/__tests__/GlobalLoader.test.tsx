import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import GlobalLoader from "../GlobalLoader";

const mockStore = configureStore([]);

describe("GlobalLoader Component", () => {
  let store;

  it("matches the snapshot when loader is active", () => {
    store = mockStore({
      loaders: {globalLoader: true},
    });

    const {asFragment} = render(
      <Provider store={store}>
        <GlobalLoader/>
      </Provider>
    );

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches the snapshot when loader is inactive", () => {
    store = mockStore({
      loaders: {globalLoader: false},
    });

    const {asFragment} = render(
      <Provider store={store}>
        <GlobalLoader/>
      </Provider>
    );

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
