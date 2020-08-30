import nock from 'nock'
import { Request } from 'helpers/Request'

const getToken = async () => {
    const token = await Request('get', '/search')
    return token
}

const getTickets = async (searchId: string) => {
    const response = await Request('get', `/tickets?searchId=${searchId}`)
    return response
}

const ticketJson = {
    price: 94223,
    carrier: 'S7',
    segments: [
        {
            origin: 'MOW',
            destination: 'HKT',
            date: '2020-09-01T08:44:00.000Z',
            stops: ['IST', 'SHA'],
            duration: 960,
        },
        {
            origin: 'HKT',
            destination: 'MOW',
            date: '2020-09-21T09:53:00.000Z',
            stops: ['KUL', 'BKK', 'SIN'],
            duration: 860,
        },
    ],
}

describe('Testing Requests', () => {
    test('should return a token', async () => {
        nock('https://front-test.beta.aviasales.ru').get('/search').reply(200, {
            response: '4gt6t2',
        })
        //nock.isDone();
        const token = await getToken()
        expect(token.status).toEqual(200)
        expect(token.data.response).toBe('4gt6t2')
    })

    test('should return a tickets', async () => {
        nock('https://front-test.beta.aviasales.ru')
            .get(`/tickets?searchId=4gt6t2`)
            .reply(200, {
                response: ticketJson,
            })
        const tickets = await getTickets('4gt6t2')
        expect(JSON.stringify(tickets.data.response)).toBe(
            JSON.stringify(ticketJson)
        )
    })
})
