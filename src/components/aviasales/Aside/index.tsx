import React from 'react'
import styled from 'styled-components'
import { Column, Row, Checkbox, Description, Button } from 'ui'
import {
    AlignItemsTypes,
    ColorType,
    FontSizeTypes,
    WeightTypes,
    MarginTypes,
    ButtonTypes,
} from 'helpers/enum'
import { setFilteredIds } from './helpers'
import config from '../config.json'

const Container = styled(Column)`
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 12px;
    width: 230px;
    max-width: 230px;
    background: ${ColorType.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
`
const Wrapper = styled(Row)`
    padding: 10px 20px;
    position: relative;
    cursor: pointer;
    ${Description} {
        display: none;
    }
    &:hover {
        background: #f1fcff;
        ${Description} {
            display: block;
            position: absolute;
            font-size: 10px;
            right: 20px;
            top: 15px;
        }
    }
    &:last-child {
        margin-bottom: 0;
    }
`

interface IAside {
    setFilterIds: (ids: number[]) => void
    filterIds: number[]
}

const Aside: React.FC<IAside> = ({
    filterIds,
    setFilterIds,
}): React.ReactElement => {
    const filterIdForAllTickets = 1000
    const ids = config.map(({ id }) => id)

    const onHandlerChange = (id: number) => {
        if (filterIds.includes(id) && id === filterIdForAllTickets) {
            return setFilterIds([])
        }
        if (filterIds.includes(id)) {
            const filteredIds = filterIds.filter(checkId => checkId !== id)
            return setFilteredIds(filteredIds, setFilterIds)
        }
        return id === filterIdForAllTickets
            ? setFilteredIds(ids, setFilterIds)
            : setFilteredIds([...filterIds, id], setFilterIds)
    }

    const onHandlerClick = (id: number) => {
        return id === filterIdForAllTickets
            ? setFilterIds(ids)
            : setFilterIds([id])
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
                <Wrapper ai={AlignItemsTypes.center} key={id}>
                    <Checkbox
                        id={id}
                        name={name}
                        ids={filterIds}
                        onChange={onHandlerChange}
                    />
                    <Button
                        onClick={() => onHandlerClick(id)}
                        type={ButtonTypes.button}
                    >
                        <Description
                            colorType={ColorType.blue}
                            fontSize={FontSizeTypes.xs}
                            fontWeight={WeightTypes.w600}
                            uppercase
                        >
                            Только
                        </Description>
                    </Button>
                </Wrapper>
            ))}
        </Container>
    )
}
export { Aside }
