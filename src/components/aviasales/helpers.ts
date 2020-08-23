import { request } from 'helpers/Request'

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

export const fetchToken = async (path: string) => {
    const token = await request('get', path);
    return token;
}

export const fetchData = async () => {
    const token = await fetchToken('/search');
    const { searchId } = token.data
    const response = await request(
        'get',
        `/tickets?searchId=${searchId}`
    )
    return response.data;
}
