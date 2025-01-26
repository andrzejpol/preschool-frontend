import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import Login from "../Login";

const mockStore = configureStore([]);

describe("Login Component", () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
    });

    it("matches the snapshot", () => {
        const {asFragment} = render(
            <Provider store={store}>
                <Router>
                    <Login/>
                </Router>
            </Provider>
        );

        // Snapshot assertion
        expect(asFragment()).toMatchSnapshot();
    });
});
