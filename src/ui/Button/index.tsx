import React from 'react'
import styled from 'styled-components'
import { ButtonTypes } from 'helpers/enum'

const ButtonComponent = styled.button`
    display: flex;
    margin: 0;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
`

interface IButton {
    children: React.ReactElement | string
    type: ButtonTypes
    onClick: (...arg: any) => void
}

const Button: React.FC<IButton> = ({ children, type, onClick }) => {
    return (
        <ButtonComponent onClick={onClick} type={type}>
            {children}
        </ButtonComponent>
    )
}

export { Button }
