export const sortByPriceAscending = tickets => {
    return tickets.sort((a, b) => a.price - b.price)
}
