import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Ticket } from '../'
import moment from 'moment'

describe('describe inner 1', () => {
    const durationTime = moment.duration(1646, 'minutes')

    test('minutes', () => {
        expect(durationTime.minutes()).toBe(26)
    })

    test('hours', () => {
        expect(durationTime.hours()).toBe(3)
    })
})

const ticketJson = {
    price: 94223,
    carrier: 'S7',
    segments: [
        {
            origin: 'MOW',
            destination: 'HKT',
            date: '2020-09-01T08:44:00.000Z',
            stops: ['IST', 'SHA'],
            duration: 960,
        },
        {
            origin: 'HKT',
            destination: 'MOW',
            date: '2020-09-21T09:53:00.000Z',
            stops: ['KUL', 'BKK', 'SIN'],
            duration: 860,
        },
    ],
}

describe('Testing Ticket', () => {
    test('Render Ticket', () => {
        const renderer = render(<Ticket ticket={ticketJson} />)
        expect(renderer).toMatchSnapshot()
    })
})
