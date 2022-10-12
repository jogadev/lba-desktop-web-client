export interface PriceDetail {
    pack: number,
    unit: number
}

interface Labels {
    pack?: string,
    unit?: string
}

export interface PriceListItem {
    id: string, 
    name: string,
    category: string,
    prices: PriceDetail,
    cost: PriceDetail,
    labels: Labels,
    providerId: string
}

