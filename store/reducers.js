import { combineReducers } from '@reduxjs/toolkit'
import { adminSlice } from './admins/slice'
import { cartSlice } from './cart/slice'
import { categorySlice } from './catrgories/slice'
import { customerSlice } from './customers/slice'
import { memberSlice } from './members/slice'
import { singleMemberSlice } from './singleMember/slice'
import { userSlice } from './users/slice'

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    members: memberSlice.reducer,
    singleMember: singleMemberSlice.reducer,
    categories: categorySlice.reducer,
    customers: customerSlice.reducer,
    carts: cartSlice.reducer
    
})