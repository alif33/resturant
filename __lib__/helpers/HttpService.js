import axios from "axios";
import { toast } from "react-hot-toast";

export const ROOT_URL = `http://localhost:3000/`;
export const APP_URL = `http://localhost:3000/`;
export const IMAGE_URL = `${APP_URL}storage`;
export const API_URL = `${APP_URL}api/`;

const api = axios.create({
  baseURL: API_URL,
});

const authHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};
export const getData = async (endPoint) => {
  try {
    const { data } = await api.get(endPoint);
    return data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
  }
};

export const getUserData = async (endPoint, token) => {
  try {
    const { data } = await api.get(endPoint, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
    return error;
  }
};

export const postData = async (endPoint, formData, setDisable) => {
  try {
    const { data } = await api.post(endPoint, formData);
    setDisable(false);
    return data;
  } catch (error) {
    setDisable(false);
    toast.error(`${error?.response?.data?.message}`);
    return error;
  }
};

export const postReq = async (endPoint, formData) => {
  try {
    const { data } = await api.post(endPoint, formData);
    return data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
    return error;
  }
};

export const authPost = async (endPoint, formData, token) => {
  try {
    const { data } = await api.post(endPoint, formData, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
    return error;
  }
};

export const updateData = async (endPoint, formData, token) => {
  try {
    const { data } = await axios.put(API_URL + endPoint, formData, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
    return error;
  }
};
export const deleteData = async (endPoint, token) => {
  try {
    const { data } = await axios.delete(API_URL + endPoint, {
      headers: authHeader(token),
    });
    return data;
  } catch (error) {
    toast.error(`${error?.response?.data?.message}`);
    return error;
  }
};

export const getFormData = async (key, data) => {
  // needed for images
  const formData = new FormData();
  for (let i = 0; i < key.length; i++) {
    formData.append(key[i], data[i]);
  }
  return formData;
};

export const addShopPost = (data, token) => {
  var formdata = new FormData();
  formdata.append("shop_status", data.shop_status);
  formdata.append("shop_pay_type", data.shop_pay_type);
  formdata.append("shop_name", data.shop_name);
  formdata.append("shop_logo", data.shop_logo[0]);
  formdata.append("web_header", data.web_header[0]);
  formdata.append("mobile_header", data.mobile_header[0]);
  formdata.append("account_manager", data.account_manager);
  formdata.append("sales_rep", data.sales_rep);
  formdata.append("menu_rep", data.menu_rep);
  formdata.append("email_statement", data.email_statement);
  formdata.append("payment_frequency", data.payment_frequency);
  formdata.append("flat_fee", data.flat_fee);
  formdata.append("trial_end", data.trial_end);
  formdata.append("processing_fee", data.processing_fee);
  formdata.append("contact_method", data.contact_method);
  formdata.append("gmb_domain", data.gmb_domain);
  formdata.append("own_website", data.own_website);
  formdata.append("gmb_status", data.gmb_status);
  formdata.append("gmb_role", data.gmb_role);
  formdata.append("gmb_email", data.gmb_email);
  formdata.append("gmb_password", data.gmb_password);
  formdata.append("gmb_owner", data.gmb_owner);
  formdata.append("meal_now_domain", data.meal_now_domain);
  formdata.append("shop_address", data.shop_address);
  formdata.append("city", data.city);
  formdata.append("state", data.state);
  formdata.append("zip_code", data.zip_code);
  formdata.append("lat", data.lat);
  formdata.append("long", data.long);
  formdata.append("time_zone", data.time_zone);
  formdata.append("owners_email", data.owners_email);
  formdata.append("owners_phone", data.owners_phone);
  formdata.append("owners_name", data.owners_name);
  formdata.append("se_contact_name", data.se_contact_name);
  formdata.append("se_contact_phone", data.se_contact_phone);
  formdata.append("se_contact_email", data.se_contact_email);
  formdata.append("res_phone", data.res_phone);
  formdata.append("minimum_pickUp_order", data.minimum_pickUp_order);
  formdata.append("minimum_delivery_order", data.minimum_delivery_order);
  formdata.append("pickUp_estimate", data.pickUp_estimate);
  formdata.append("delivery_estimate", data.delivery_estimate);
  formdata.append("online_discount", data.online_discount);
  formdata.append("pause_delivery_today", data.pause_delivery_today);
  formdata.append("no_scheduled_order", data.no_scheduled_order);
  formdata.append("stop_order_today", data.stop_order_today);

  authPost(`admin/shop`, formdata, token).then((res) => res);
};
