import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Aside } from './Aside'
import { Ticket } from 'widgets/Ticket'
import { Row, Column, Description, AviasalesLogo } from 'ui'
import {
    JustifyContentTypes,
    AlignItemsTypes,
    MarginTypes,
    FontSizeTypes,
    ColorType,
    WeightTypes,
} from 'helpers/enum'
import {
    ITickets,
    filteredTicketsByStops,
    getColor,
    getFilterIds,
} from './helpers'
import { tabs, tabContent } from './configTab'

const Container = styled(Row)`
    max-width: 750px;
`

const Wrapper = styled(Column)`
    padding-top: 50px;
    padding-bottom: 120px;
    min-height: 100vh;
    background: #f3f7fa;
`

interface ITicketContainer {
    isActive: boolean
}

const TicketContainer = styled(Column)<ITicketContainer>`
    display: ${props => (props.isActive ? 'flex' : 'none')};
`

interface INewTab {
    active: boolean
}

const NewTab = styled.div<INewTab>`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 60px;
    width: 250px;
    height: 50px;
    color: ${props => (props.active ? ColorType.white : ColorType.black)};
    background: ${props => (props.active ? ColorType.blue : ColorType.white)};
`

interface IRenderTickets {
    filteredTickets: ITickets[]
    sortMethod: (filteredTickets: ITickets[]) => ITickets[] | []
}

const IRenderTickets: React.FC<IRenderTickets> = ({
    filteredTickets,
    sortMethod,
}): React.ReactElement => {
    if (!filteredTickets.length) {
        return (
            <Description
                fontSize={FontSizeTypes.l}
                colorType={ColorType.black}
                fontWeight={WeightTypes.w600}
            >
                По вашему запросу билетов не найдено
            </Description>
        )
    }
    return sortMethod(filteredTickets).map((ticket, index) => (
        <Ticket key={`${ticket.origin}_${index}`} ticket={ticket} />
    ))
}

interface IAviasales {
    tickets: ITickets[]
}

const Aviasales: React.FC<IAviasales> = ({ tickets }): React.ReactElement => {
    const [filteredTickets, setFilteredTickets] = useState<ITickets[]>(tickets)
    const [defaultTickets, setDefaultTickets] = useState<ITickets[]>(tickets)
    const [filterIds, setFilterIds] = useState<number[]>(getFilterIds())
    const [tabId, setTabId] = useState<number>(0)

    useEffect(() => {
        setFilteredTickets(tickets)
        setDefaultTickets(tickets)
    }, [tickets])

    useEffect(() => {
        setFilteredTickets(filteredTicketsByStops(filterIds, defaultTickets))
    }, [filterIds])

    const onHandlerSelect = (id: number) => {
        setTabId(id)
    }

    return (
        <Wrapper jc={JustifyContentTypes.flexStart} ai={AlignItemsTypes.center}>
            <Row jc={JustifyContentTypes.center} mb={MarginTypes.bottom_x5}>
                <AviasalesLogo />
            </Row>
            <Container
                ai={AlignItemsTypes.flexStart}
                jc={JustifyContentTypes.spaceBetween}
            >
                <Aside setFilterIds={setFilterIds} filterIds={filterIds} />
                <Column noFlex>
                    <Row mb={MarginTypes.bottom_x2}>
                        {tabs.map(({ id, name }) => (
                            <NewTab
                                data-testid={`tab-${id}`}
                                key={`${id}_${name}`}
                                active={id === tabId}
                                onClick={() => onHandlerSelect(id)}
                            >
                                <Description
                                    fontSize={FontSizeTypes.xs}
                                    colorType={ColorType[getColor(id, tabId)]}
                                    uppercase
                                >
                                    {name}
                                </Description>
                            </NewTab>
                        ))}
                    </Row>
                    {tabContent.map(({ id, sortMethod }) => (
                        <TicketContainer
                            data-testid={`tickets-container-${id}`}
                            key={`${id}_${sortMethod}`}
                            isActive={tabId === id}
                        >
                            <IRenderTickets
                                filteredTickets={filteredTickets}
                                sortMethod={sortMethod}
                            />
                        </TicketContainer>
                    ))}
                </Column>
            </Container>
        </Wrapper>
    )
}

export { Aviasales }
