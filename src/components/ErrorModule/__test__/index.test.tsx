import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ErrorModule } from '../'

const errors = {
    status: "500"
}

test('Render ErrorModule', () => {
    const renderer = render(<ErrorModule status={errors.status} />)
    expect(renderer).toMatchSnapshot()
})
