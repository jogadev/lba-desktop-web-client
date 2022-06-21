export interface PriceDetail {
    pack: number,
    unit: number
}

export interface PriceListItem {
    name: string,
    category: string,
    prices: PriceDetail,
    cost: PriceDetail,
    providerId: string
}
