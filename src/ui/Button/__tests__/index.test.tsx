import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button, Description } from 'ui'
import {
    ButtonTypes,
    ColorType,
    FontSizeTypes,
    WeightTypes,
} from 'helpers/enum'

describe('Testing Button', () => {
    const onHandlerClick = jest.fn(e => e.preventDefault())
    test('Render Button', () => {
        const renderer = render(
            <Button
                onClick={onHandlerClick}
                type={ButtonTypes.button}
                dataTestId={'testing-btn'}
            >
                <Description
                    colorType={ColorType.blue}
                    fontSize={FontSizeTypes.xs}
                    fontWeight={WeightTypes.w600}
                    uppercase
                >
                    Тестовый текст
                </Description>
            </Button>
        )
        expect(renderer).toMatchSnapshot()
    })

    test('Testing Button', () => {
        render(
            <Button
                onClick={onHandlerClick}
                type={ButtonTypes.button}
                dataTestId={'testing-btn'}
            >
                <Description
                    colorType={ColorType.blue}
                    fontSize={FontSizeTypes.xs}
                    fontWeight={WeightTypes.w600}
                    uppercase
                >
                    Тестовый текст
                </Description>
            </Button>
        )
        const btn = screen.getByTestId('testing-btn')
        screen.getByText('Тестовый текст')
        fireEvent.click(btn)
        expect(onHandlerClick).toHaveBeenCalledTimes(1)
    })
})
