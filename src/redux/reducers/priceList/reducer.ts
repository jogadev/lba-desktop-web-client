import { PriceListItem } from "./types"
import { UPDATE_LIST, ACTIVATE_FILTER, CLEAR_FILTER } from "./actions";

interface PriceListData {
    items: PriceListItem[],
    activeFilter: string 
}

const initialState: PriceListData = {
    items: [],
    activeFilter: ""
}

const handlers : any = {
    [UPDATE_LIST]: (state: PriceListData, payload: PriceListItem[]): PriceListData => {
        return {
            ...state, 
            items: payload
        }
    },

    [ACTIVATE_FILTER]: (state: PriceListData, payload: string): PriceListData => {
        return {
            ...state,
            activeFilter: payload
        }
    },

    [CLEAR_FILTER]: (state: PriceListData) : PriceListData => {
        return {
            ...state,
            activeFilter: ""
        }
    }
};

const _default = (state: PriceListData) => state;

export function PriceListReducer(state: PriceListData = initialState, action: any){
    const H = handlers[action.type] || _default;

    return H(state, action.payload);
}


export const PriceListReducerName = "PRICELIST";