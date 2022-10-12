import { PriceListItem } from "./types"
import { UPDATE_LIST, ACTIVATE_FILTER, CLEAR_FILTER, HIDE_LIST } from "./actions";

interface PriceListData {
    items: any[], // TODO: type this.
    activeFilter: string,
    showingItems: boolean 
}

const initialState: PriceListData = {
    items: [],
    activeFilter: "",
    showingItems: false
}

const handlers : any = {
    [UPDATE_LIST]: (state: PriceListData, payload: any[]): PriceListData => {
        return {
            ...state, 
            items: payload
        }
    },

    [ACTIVATE_FILTER]: (state: PriceListData, payload: string): PriceListData => {
        return {
            ...state,
            activeFilter: payload,
            showingItems: true
        }
    },

    [CLEAR_FILTER]: (state: PriceListData) : PriceListData => {
        return {
            ...state,
            activeFilter: "",
        }
    },

    [HIDE_LIST]: (state: PriceListData) : PriceListData => {
        return {
            ...state,
            activeFilter: "",
            showingItems: false
        }
    }
};

const _default = (state: PriceListData) => state;

export function PriceListReducer(state: PriceListData = initialState, action: any){
    const H = handlers[action.type] || _default;

    return H(state, action.payload);
}


export const PriceListReducerName = "PRICELIST";