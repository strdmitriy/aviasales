import React from 'react'
import styled from 'styled-components'
import { Column } from 'ui/Layout'
import Check from 'assets/check.svg'

const Input = styled.input`
  position: absolute;
  opacity: 0;
  left: -9999px;
  &:checked + label:after {
    background: url(${Check});
  }
  &:checked:before {
    border: 1px solid #9ABBCE;
  }
}
`
const Label = styled.label`
    position: relative;
    margin-left: 30px;
    font-size: 13px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #4a4a4a;
    cursor: pointer;
    &:before {
        position: absolute;
        display: block;
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 2px;
        left: -30px;
        border: 1px solid #9abbce;
        top: 0;
    }
    &:after {
        position: absolute;
        display: block;
        content: '';
        left: -25px;
        width: 12px;
        height: 8px;
    }
`

interface ICheckbox {
    id: number
    name: string
    ids: number[]
    onChange: (id: number) => void
}

const Checkbox: React.FC<ICheckbox> = ({ id, name, ids, onChange }) => {
    const isChecked = (id: number) => {
        return ids.includes(id)
    }

    const onHandlerChange = () => {
        onChange(id)
    }

    return (
        <Column>
            <Input
                data-testid={`checkbox_${id}`}
                onChange={onHandlerChange}
                type="checkbox"
                id={id}
                checked={isChecked(id)}
                name={name}
            />
            <Label htmlFor={String(id)}>{name}</Label>
        </Column>
    )
}

export { Checkbox }
