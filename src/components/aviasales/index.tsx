import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Aside } from './Aside'
import { Ticket } from 'widgets/Ticket'
import { Row, Column, Description, Logo } from 'ui'
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
    sortByPriceAscending,
    sortByDurationAscending,
} from './helpers'

const Container = styled(Row)`
    max-width: 750px;
`

const Wrapper = styled(Column)`
    padding-top: 50px;
    padding-bottom: 120px;
    min-height: 100vh;
    background: #f3f7fa;
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

const NewTabList = styled(TabList)`
    margin: 0;
    padding: 0;
    padding-bottom: 20px;
    list-style: none;
`

interface ICustomTab {
    children: string
    props?: any
}

const CustomTab: React.FC<ICustomTab> = ({ children, ...props }) => {
    //@ts-ignore
    const { selected } = props
    return (
        <Tab>
            <NewTab active={selected}>
                <Description
                    fontSize={FontSizeTypes.xs}
                    colorType={selected ? ColorType.white : ColorType.black}
                    uppercase
                >
                    {children}
                </Description>
            </NewTab>
        </Tab>
    )
}

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

const CustomTabList: React.FC<ICustomTabList> = ({ children }) => {
    return (
        <NewTabList>
            <Row>
                <Row>{children}</Row>
            </Row>
        </NewTabList>
    )
}

interface IAviasales {
    tickets: ITickets[]
}

const Aviasales: React.FC<IAviasales> = ({ tickets }): React.ReactElement => {
    const [filteredTickets, setFilteredTickets] = useState<ITickets[]>([])
    const [defaultTickets, setDefaultTickets] = useState<ITickets[]>([])
    const [checkedIds, setCheckedIds] = useState<number[]>([1000])

    useEffect(() => {
        setFilteredTickets(tickets)
        setDefaultTickets(tickets)
    }, [tickets])

    useEffect(() => {
        setFilteredTickets(filteredTicketsByStops(checkedIds, defaultTickets))
    }, [checkedIds])

    return (
        <Wrapper jc={JustifyContentTypes.flexStart} ai={AlignItemsTypes.center}>
            <Row jc={JustifyContentTypes.center} mb={MarginTypes.bottom_x5}>
                <Logo />
            </Row>
            <Container
                ai={AlignItemsTypes.flexStart}
                jc={JustifyContentTypes.spaceBetween}
            >
                <Aside setCheckedIds={setCheckedIds} checkedIds={checkedIds} />
                <Column noFlex>
                    <Tabs>
                        <CustomTabList>
                            <CustomTab>Самый дешевый</CustomTab>
                            <CustomTab>Самый быстрый</CustomTab>
                        </CustomTabList>
                        <TabPanel>
                            <IRenderTickets
                                filteredTickets={filteredTickets}
                                sortMethod={sortByPriceAscending}
                            />
                        </TabPanel>
                        <TabPanel>
                            <IRenderTickets
                                filteredTickets={filteredTickets}
                                sortMethod={sortByDurationAscending}
                            />
                        </TabPanel>
                    </Tabs>
                </Column>
            </Container>
        </Wrapper>
    )
}

export { Aviasales }
