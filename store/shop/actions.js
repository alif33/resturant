import { getData } from '../../__lib__/helpers/HttpService';
import { shopSlice } from "./slice";
const { actions: slice } = shopSlice;

export const setShop = () => (dispatch) => {
  getData('/admin/customers')
    .then(response => dispatch(slice.setShop(response)))
}
