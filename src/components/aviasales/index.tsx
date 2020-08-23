import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { request } from 'helpers/Request'
import { Aside } from './Aside'
import { ErrorModule } from '../ErrorModule';
import { Ticket } from 'widgets/Ticket'
import { Row, Column, Description, Logo } from 'ui'
import {
    JustifyContentTypes,
    MarginTypes,
    FontSizeTypes,
    ColorType,
} from 'helpers/enum'
import {
    ITickets,
    filteredTicketsByStops,
    sortByPriceAscending,
    sortByDurationAscending,
    fetchData
} from './helpers'

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
//@ts-ignore
CustomTabList.tabsRole = 'TabList'
//@ts-ignore
CustomTab.tabsRole = 'Tab'



const Aviasales: React.FC<any> = ({}): any => {
    const [tickets, setTickets] = useState<ITickets[]>([])
    const [defaultTickets, setDefaultTickets] = useState<ITickets[]>([])
    const [errors, setErrors] = useState<{status: string}>({status: ''})
    const [checkedIds, setCheckedIds] = useState<number[]>([])

    useEffect(() => {
        setTickets(filteredTicketsByStops(checkedIds, defaultTickets))
    }, [checkedIds])

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await fetchData();
                const sliceTicket = response.tickets.slice(0, 6);
                setTickets(sliceTicket)
                setDefaultTickets(sliceTicket)
            } catch(e) {
                setErrors({ status: '500'});
            }
        }
        fetch();
    }, [])
    
    if (errors.status) {
        return <ErrorModule status={errors.status}/>
    }

    return (
        <Wrapper>
            <Row jc={JustifyContentTypes.center} mb={MarginTypes.bottom_x5}>
                <Logo />
            </Row>
            <Container>
                <Aside setCheckedIds={setCheckedIds} checkedIds={checkedIds} />
                <Column noFlex>
                    <Tabs>
                        <CustomTabList>
                            <CustomTab>Самый дешевый</CustomTab>
                            <CustomTab>Самый быстрый</CustomTab>
                        </CustomTabList>
                        <TabPanel>
                            {sortByPriceAscending(tickets).map(
                                (ticket, index) => (
                                    <Ticket key={index} ticket={ticket} />
                                )
                            )}
                        </TabPanel>
                        <TabPanel>
                            {sortByDurationAscending(tickets).map(
                                (ticket, index) => (
                                    <Ticket key={index} ticket={ticket} />
                                )
                            )}
                        </TabPanel>
                    </Tabs>
                </Column>
            </Container>
        </Wrapper>
    )
}

export { Aviasales }
