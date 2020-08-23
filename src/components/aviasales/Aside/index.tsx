import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Column, Checkbox, Description } from 'ui'
import {
    ColorType,
    FontSizeTypes,
    WeightTypes,
    MarginTypes,
} from 'helpers/enum'
import config from '../config.json'

const Container = styled.div`
    display: flex;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 12px;
    width: 230px;
    flex-direction: column;
    max-width: 230px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    &:hover {
        background: #f1fcff;
    }
    &:last-child {
        margin-bottom: 0;
    }
`

interface IAside {
    setCheckedIds: (ids: number[]) => void
    checkedIds: number[]
}

const Aside: React.FC<IAside> = ({
    checkedIds,
    setCheckedIds,
}): React.ReactElement => {
    const onHandlerChange = (id: number) => {
        const allChecked = 1000
        if (checkedIds.includes(id)) {
            return setCheckedIds(checkedIds.filter(checkId => checkId !== id))
        }
        if (id === allChecked) {
            const ids = config.map(({ id }) => id)
            return setCheckedIds(ids)
        }
        return setCheckedIds([...checkedIds, id])
    }

    return (
        <Container>
            <Description
                colorType={ColorType.black}
                fontSize={FontSizeTypes.xs}
                fontWeight={WeightTypes.w600}
                mb={MarginTypes.bottom}
                ml={MarginTypes.left_x2}
                uppercase
            >
                Количество пересадок
            </Description>
            {config.map(({ id, name }) => (
                <Wrapper key={id}>
                    <Checkbox
                        id={id}
                        name={name}
                        ids={checkedIds}
                        onChange={onHandlerChange}
                    />
                </Wrapper>
            ))}
        </Container>
    )
}
export { Aside }
