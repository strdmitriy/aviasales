import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Description } from '../'

test('Render Description', () => {
    const testMessage = 'testing description'
    const renderer = render(<Description>{testMessage}</Description>)
    expect(renderer).toMatchSnapshot()
})
