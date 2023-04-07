export interface IFilter {
    search: string
    price: IRange
    rate: IRange
}
export const initFilter: IFilter = {
    search: '',
    price: {
        from: '0',
    to: '10000000000000000'
    },
    rate: {
        from: '0',
        to: '5'
    }
}
export interface IRange {
    from: string
    to: string
}