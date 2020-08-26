import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Aviasales } from '../'
import config from './config.json'

describe('Aviasales', () => {
    test('Testing Aviasales Tab', () => {
        const { getByTestId } = render(<Aviasales tickets={config} />)
        const tab2 = getByTestId('tab-1')
        const ticketContainer1 = getByTestId('tickets-container-0')
        const ticketContainer2 = getByTestId('tickets-container-1')
        expect(
            window
                .getComputedStyle(ticketContainer1)
                .getPropertyValue('display')
        ).toBe('flex')
        expect(
            window
                .getComputedStyle(ticketContainer2)
                .getPropertyValue('display')
        ).toBe('none')
        fireEvent.click(tab2)
        expect(
            window
                .getComputedStyle(ticketContainer1)
                .getPropertyValue('display')
        ).toBe('none')
        expect(
            window
                .getComputedStyle(ticketContainer2)
                .getPropertyValue('display')
        ).toBe('flex')
    })

    test('Testing Aviasales Tickets', () => {
        const { getByTestId } = render(<Aviasales tickets={config} />)
        const ticketContainer1 = getByTestId('tickets-container-0')
        const stopsAll = getByTestId('checkbox_1000')
        const stops2 = getByTestId('checkbox_2')
        expect(ticketContainer1.children.length).toBe(3)
        fireEvent.click(stopsAll)
        fireEvent.click(stops2)
        expect(ticketContainer1.children.length).toBe(1)
    })
})
