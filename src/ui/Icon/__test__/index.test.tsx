import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Icon } from "../";


describe('Testing Icon/Logo', () => {
    test("Render Icon", () => {
        const renderer = render(
            <Icon image="DP@2x"/>
        );
        expect(renderer).toMatchSnapshot();
    });
});