import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import Buttton from "./index";

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Buttton isDisbaled></Buttton>);

  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("should render loading/spinner", () => {
  const { container, getByText } = render(<Buttton isLoading></Buttton>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("should render <a> tag", () => {
  const { container } = render(<Buttton type="link" isExternal></Buttton>);

  expect(container.querySelector("a")).toBeInTheDocument();
});

test("should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Buttton href="" type="link"></Buttton>
    </Router>
  );

  expect(container.querySelector("a")).toBeInTheDocument();
});
