import React from "react";
import {render} from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ParentsPage from "../ParentsPage";

const mockStore = configureStore([]);

describe("ParentsPage Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      modals: {addParentModal: {isOpen: false}},
    });
  });

  it("matches the snapshot", () => {
    const {asFragment} = render(
      <Provider store={store}>
        <Router>
          <ParentsPage/>
        </Router>
      </Provider>
    );

    // Snapshot assertion
    expect(asFragment()).toMatchSnapshot();
  });
});
