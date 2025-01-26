import React from "react";
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {BrowserRouter as Router} from "react-router-dom";
import EventsPage from "../EventsPage";

const mockStore = configureStore([]);

describe("EventsPage Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      modals: {addEventModal: {isOpen: false}},
    });
  });

  it("renders the page title", () => {
    render(
      <Provider store={store}>
        <Router>
          <EventsPage/>
        </Router>
      </Provider>
    );

    // Check if the title is rendered
    expect(screen.getByText("All Events")).toBeInTheDocument();
  });

  it("renders the table headers", () => {
    render(
      <Provider store={store}>
        <Router>
          <EventsPage/>
        </Router>
      </Provider>
    );

    // Check for table headers
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Class")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Start time")).toBeInTheDocument();
    expect(screen.getByText("End time")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("renders the List component with data", () => {
    render(
      <Provider store={store}>
        <Router>
          <EventsPage/>
        </Router>
      </Provider>
    );

    // Check if the List component renders data rows
    expect(screen.getByText("Title")).toBeInTheDocument(); // Column header
    expect(screen.getByText("Class")).toBeInTheDocument(); // Column header
  });
});
