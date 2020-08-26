import React from 'react'
import styled from 'styled-components'
import { Row, Column, Description, Icon } from 'ui'
import {
    ColorType,
    FontSizeTypes,
    WeightTypes,
    JustifyContentTypes,
    CurrencyTypes,
    MarginTypes,
} from 'helpers/enum'
import { prettifyPrice } from 'helpers/currency'
import { Segment } from './components/Segment'

const Container = styled.div`
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    max-width: 500px;
    padding: 20px 50px 20px 20px;
    margin-bottom: 20px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    &:last-child {
        margin-bottom: 0;
    }
`

interface ITicket {
    id: string
    ticket: {
        price: number
        carrier: string
        segments: {
            origin: string
            destination: string
            date: string
            stops: string[]
            duration: number
        }[]
    }
}

const Ticket: React.FC<ITicket> = ({ ticket, id }) => {
    const { price, carrier, segments } = ticket
    return (
        <Container data-testid="fast">
            <Row
                jc={JustifyContentTypes.spaceBetween}
                mb={MarginTypes.bottom_x2}
            >
                <Description
                    fontSize={FontSizeTypes.l}
                    colorType={ColorType.blue}
                    fontWeight={WeightTypes.w600}
                >
                    {prettifyPrice(price, CurrencyTypes.RUB)}
                </Description>
                <Icon image={carrier} />
            </Row>
            <Column>
                {segments.map((segment, index) => (
                    <Segment
                        key={`${segment.date}_${index}`}
                        segment={segment}
                    />
                ))}
            </Column>
        </Container>
    )
}
export { Ticket }
