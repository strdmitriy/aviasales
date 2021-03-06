import config from './config.json'

export interface ITickets {
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

export const filteredTicketsByStops = (
    checkedIds: number[],
    defaultTickets: ITickets[]
) => {
    const maxStops = Math.max(...checkedIds)
    return defaultTickets.reduce((acc: ITickets[], ticket) => {
        const filteredSegments = ticket.segments.filter(segment => {
            if (segment.stops.length) {
                return segment.stops.length <= maxStops
            }
            return segment
        })
        if (filteredSegments.length === ticket.segments.length) {
            return [...acc, ticket]
        }
        return acc
    }, [])
}

export const sortByPriceAscending = (tickets: ITickets[]) => {
    return tickets.sort((a, b) => a.price - b.price)
}

export const sortByDurationAscending = (tickets: ITickets[]) => {
    return tickets.sort((a, b) => {
        const segmentsA = a.segments[0].duration + a.segments[1].duration
        const segmentsB = b.segments[0].duration + b.segments[1].duration
        return segmentsA - segmentsB
    })
}

export const getColor = (id: number, tabId: number) => {
    return id === tabId ? 'white' : 'black'
}

export const getFilterIds = () => {
    return config.map(({ id }) => id)
}
