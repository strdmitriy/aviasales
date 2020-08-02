import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Row, Column } from "../";

describe("Render Layout", () => {
  const testMessage = "testing text";

  test("Render Row", () => {
    const renderer = render(<Row>{testMessage}</Row>);
    expect(renderer).toMatchSnapshot();
  });

  test("Render Column", () => {
    const testMessage = "testing description";
    const renderer = render(<Column>{testMessage}</Column>);
    expect(renderer).toMatchSnapshot();
  });
});
