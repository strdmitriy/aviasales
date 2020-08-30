import * as React from 'react'
import { GlobalStyle } from './theme/globalStyle'
import { request } from 'helpers/Request'
import { Aviasales } from 'components/aviasales'
import { ErrorModule } from 'components/ErrorModule'
import { ITickets } from './components/Aviasales/helpers'

interface IAppState {
    tickets: ITickets[]
    errors: { status: string }
}

class App extends React.Component<null, IAppState> {
    constructor() {
        super()
        this.state = { tickets: [], errors: { status: '' } }
    }

    async componentDidMount() {
        try {
            const token = await request('get', '/search')
            const { searchId } = token.data
            const response = await request(
                'get',
                `/tickets?searchId=${searchId}`
            )
            const sliceTicket = response.data.tickets.slice(0, 6)
            this.setState({ tickets: sliceTicket })
        } catch (e) {
            this.setState({ errors: { status: '500' } })
        }
    }

    render() {
        const { tickets, errors } = this.state
        if (errors.status) {
            return <ErrorModule status={errors.status} />
        }
        return (
            <React.Fragment>
                <Aviasales tickets={tickets} />
                <GlobalStyle />
            </React.Fragment>
        )
    }
}

export default App
