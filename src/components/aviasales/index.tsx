import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Aside } from './Aside'
import { Ticket } from 'widgets/Ticket'
import { Row, Column, Description, AviasalesLogo } from 'ui'
import {
    JustifyContentTypes,
    MarginTypes,
    FontSizeTypes,
    ColorType,
    WeightTypes,
} from 'helpers/enum'
import { ITickets, filteredTicketsByStops } from './helpers'
import { tabs, tabContent } from './configTab'

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 750px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

const Wrapper = styled.div`
    display: flex;
    padding-top: 50px;
    padding-bottom: 120px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
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

interface ICustomTabList {
    children: any
}

interface IAviasales {
    tickets: ITickets[]
}

const Aviasales: React.FC<IAviasales> = ({ tickets }): React.ReactElement => {
    const [filteredTickets, setFilteredTickets] = useState<ITickets[]>(tickets)
    const [defaultTickets, setDefaultTickets] = useState<ITickets[]>(tickets)
    const [checkedIds, setCheckedIds] = useState<number[]>([1000])
    const [tabId, setTabId] = useState<number>(0)

    useEffect(() => {
        setFilteredTickets(tickets)
        setDefaultTickets(tickets)
    }, [tickets])

    useEffect(() => {
        setFilteredTickets(filteredTicketsByStops(checkedIds, defaultTickets))
    }, [checkedIds])

    const onHandlerSelect = (id: number) => {
        setTabId(id)
    }

    return (
        <Wrapper>
            <Row jc={JustifyContentTypes.center} mb={MarginTypes.bottom_x5}>
                <AviasalesLogo />
            </Row>
            <Container>
                <Aside setCheckedIds={setCheckedIds} checkedIds={checkedIds} />
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
                                    colorType={
                                        id === tabId
                                            ? ColorType.white
                                            : ColorType.black
                                    }
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
