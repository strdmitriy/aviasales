import { pluralize } from 'helpers/pluralize'
import moment from 'moment'

const getTakeOffLandingTime = (date: string, duration: number): string => {
    const takeOffTime = moment(date).format('hh:mm')
    const landingTime = moment(date).add(duration, 'minutes').format('hh:mm')
    return `${takeOffTime} - ${landingTime}`
}

const getFlightingTime = (duration: number): string => {
    const durationTime = moment.duration(duration, 'minutes')
    const hour = durationTime.hours()
    const minute = durationTime.minutes()
    return `${hour}ч ${minute}м`
}

const getNumberTransferFlight = (stops: string[]) => {
    if (!stops.length) {
        return 'без пересадок'
    }
    const number = stops.length
    const cases = [' Пересадка', ' Пересадки', ' Пересадок']
    return `${number} ${pluralize(number, cases)}`
}

const getCountries = (stops: string[]) => {
    return stops.map(country => country.split(',').join(' : ')).join(',\n')
}

export {
    getTakeOffLandingTime,
    getFlightingTime,
    getNumberTransferFlight,
    getCountries,
}
