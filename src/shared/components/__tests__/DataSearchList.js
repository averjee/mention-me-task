import "@testing-library/jest-dom/extend-expect";

import React from "react";

import { render } from "@testing-library/react";

import DataSearchList from "../DataSearchList/DataSearchList";

/**
 * Arguably a dumb test, but thought I'd add something to test Jest was working + a file to build on
 */
test("renders without exploding", () => {
  const { getByRole } = render(<DataSearchList data={[]} onClick={() => {}} />);

  expect(getByRole("textbox")).toBeInTheDocument();
});
