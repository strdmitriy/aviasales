import { sortByPriceAscending, sortByDurationAscending } from './helpers'

export const tabs = [
    {
        id: 0,
        name: 'Самый дешевый',
    },
    {
        id: 1,
        name: 'Самый быстрый',
    },
]

export const tabContent = [
    {
        id: 0,
        sortMethod: sortByPriceAscending,
    },
    {
        id: 1,
        sortMethod: sortByDurationAscending,
    },
]
