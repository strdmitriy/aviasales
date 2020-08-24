import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../";

const onChange = () => {
    console.log('test')
} 

test("Render Checkbox", () => {
  const renderer = render(<Checkbox id={2} name="2 пересадки" ids={[2]} onChange={onChange}/>);
  expect(renderer).toMatchSnapshot();
});
