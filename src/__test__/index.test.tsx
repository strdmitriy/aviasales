import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import { Aviasales } from 'components/aviasales';
import config from './config.json'

test("Render Aviasales", () => {
  render(<Aviasales tickets={config} />);
  fireEvent.click(screen.getByTestId('2'))
});