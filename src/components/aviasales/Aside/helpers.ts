import config from '../config.json'

const setFilteredIds = (filterIds: number[], setFilterIds) => {
    const filterIdForAllTickets = 1000
    const ids = config
        .filter(({ id }) => id !== filterIdForAllTickets)
        .map(({ id }) => id)
    const isEveryFilterIdIncluded = ids.every(id => filterIds.includes(id))
    if (isEveryFilterIdIncluded) {
        return setFilterIds([...filterIds, filterIdForAllTickets])
    }

    return setFilterIds(filterIds.filter(id => id !== filterIdForAllTickets))
}

export { setFilteredIds }
