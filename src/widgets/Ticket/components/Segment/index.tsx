import React from 'react'
import styled from 'styled-components'
import { Information } from '../information'
import { Row, Column, Icon, Description } from 'ui'
import {
    ColorType,
    FontSizeTypes,
    WeightTypes,
    JustifyContentTypes,
    MarginTypes,
} from 'helpers/enum'
import {
    getTakeOffLandingTime,
    getFlightingTime,
    getNumberTransferFlight,
    getCountries,
} from './helpers'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 500px;
`

interface ISegment {
    segment: {
        origin: string
        destination: string
        date: string
        stops: string[]
        duration: number
    }
}
const Segment: React.FC<ISegment> = ({ segment }): React.ReactElement => {
    const { origin, destination, date, duration, stops } = segment
    return (
        <Container>
            <Row>
                <Information
                    title={`${origin} - ${destination}`}
                    information={getTakeOffLandingTime(date, duration)}
                />
            </Row>
            <Row>
                <Information
                    title="В Пути"
                    information={getFlightingTime(duration)}
                />
            </Row>
            <Row>
                <Information
                    title={getNumberTransferFlight(stops)}
                    information={getCountries(stops)}
                />
            </Row>
        </Container>
    )
}
export { Segment }
