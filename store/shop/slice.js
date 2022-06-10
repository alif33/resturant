import { createSlice } from "@reduxjs/toolkit"

export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        shopList: [],
        isLoading: true

    },
    reducers: {
        setShop: (state, action) => {
            return {
                ...state,
                shopList: action.payload,
                isLoading: false
            }
        },

    }
})
