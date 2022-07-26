import axios from "axios";
import { toast } from "react-hot-toast";

export const ROOT_URL = `https://resturant99.vercel.app/`;
export const APP_URL = `https://resturant99.vercel.app/`;

// export const ROOT_URL = `http://localhost:3000/`;
// export const APP_URL = `http://localhost:3000/`;

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

const appendFormData = (data, shop) => {
  var formdata = new FormData();
  formdata.append("shop_status", data.shop_status || shop?.shop_status);
  formdata.append("shop_pay_type", data.shop_pay_type || shop?.shop_pay_type);
  formdata.append("shop_name", data.shop_name || shop?.shop_name);
  formdata.append("chain", data.chain || shop?.chain);
  formdata.append(
    "shop_description",
    data.shop_description || shop?.shop_description
  );
  formdata.append(
    "agreement_date",
    data.agreement_date || shop?.agreement_date
  );
  formdata.append("shop_logo", data.shop_logo[0] || shop?.shop_logo);
  formdata.append(
    "landing_page_image",
    data.landing_page_image[0] || shop?.landing_page_image
  );
  formdata.append("mobile_bg", data.mobile_bg[0] || shop?.mobile_bg);
  formdata.append("desktop_bg", data.desktop_bg[0] || shop?.desktop_bg);
  formdata.append("banner_text", data.banner_text || shop?.banner_text);
  formdata.append(
    "account_manager",
    data.account_manager || shop?.account_manager
  );
  formdata.append("sales_rep", data.sales_rep || shop?.sales_rep);
  formdata.append("menu_rep", data.menu_rep || shop?.menu_rep);
  formdata.append(
    "email_statement",
    data.email_statement || shop?.email_statement
  );
  formdata.append(
    "payment_frequency",
    data.payment_frequency || shop?.payment_frequency
  );
  formdata.append("flat_fee", data.flat_fee || shop?.flat_fee);
  formdata.append("trial_end", data.trial_end || shop?.trial_end);
  formdata.append(
    "processing_fee",
    data.processing_fee || shop?.processing_fee
  );
  formdata.append(
    "contact_method",
    data.contact_method || shop?.contact_method
  );
  formdata.append("gmb_domain", data.gmb_domain || shop?.gmb_domain);
  formdata.append("own_website", data.own_website || shop?.own_website);
  formdata.append("price_range", data.price_range || shop?.price_range);
  formdata.append("gmb_status", data.gmb_status || shop?.gmb_status);
  formdata.append("gmb_role", data.gmb_role || shop?.gmb_role);
  formdata.append("gmb_email", data.gmb_email || shop?.gmb_email);
  formdata.append("gmb_password", data.gmb_password || shop?.gmb_password);
  formdata.append("gmb_owner", data.gmb_owner || shop?.gmb_owner);
  formdata.append(
    "meal_now_domain",
    data.meal_now_domain || shop?.meal_now_domain
  );
  formdata.append(
    "apple_map_email",
    data.apple_map_email || shop?.apple_map_email
  );
  formdata.append(
    "apple_map_pass",
    data.apple_map_pass || shop?.apple_map_pass
  );
  formdata.append(
    "apple_map_status",
    data.apple_map_status || shop?.apple_map_status
  );
  formdata.append(
    "apple_map_owner",
    data.apple_map_owner || shop?.apple_map_owner
  );
  formdata.append(
    "shop_address",
    data.shop_address || shop?.address?.shop_address
  );
  formdata.append("city", data.city || shop?.address?.city);
  formdata.append("state", data.state || shop?.address?.state);
  formdata.append("zip_code", data.zip_code || shop?.address?.zip_code);
  formdata.append("lat", data.lat || shop?.address?.lat);
  formdata.append("long", data.long || shop?.address?.long);
  formdata.append("time_zone", data.time_zone || shop?.address?.time_zone);
  formdata.append("owners_email", data.owners_email || shop?.owners_email);
  formdata.append("owners_phone", data.owners_phone || shop?.owners_phone);
  formdata.append("owners_name", data.owners_name || shop?.owners_name);
  formdata.append(
    "se_contact_name",
    data.se_contact_name || shop?.se_contact_name
  );
  formdata.append(
    "se_contact_phone",
    data.se_contact_phone || shop?.se_contact_phone
  );
  formdata.append(
    "se_contact_email",
    data.se_contact_email || shop?.se_contact_email
  );
  formdata.append("res_phone", data.res_phone || shop?.res_phone);
  formdata.append(
    "minimum_pickUp_order",
    data.minimum_pickUp_order || shop?.minimum_pickUp_order
  );
  formdata.append(
    "minimum_delivery_order",
    data.minimum_delivery_order || shop?.minimum_delivery_order
  );
  formdata.append(
    "pickUp_estimate",
    data.pickUp_estimate || shop?.pickUp_estimate
  );
  formdata.append(
    "delivery_estimate",
    data.delivery_estimate || shop?.delivery_estimate
  );
  formdata.append(
    "online_discount",
    data.online_discount || shop?.online_discount
  );
  formdata.append(
    "pause_delivery_today",
    data.pause_delivery_today || shop?.pause_delivery_today
  );
  formdata.append(
    "no_scheduled_order",
    data.no_scheduled_order || shop?.no_scheduled_order
  );
  // formdata.append(
  //   "stop_order_today",
  //   data.stop_order_today || shop?.stop_order_today
  // );
  return formdata;
};

export const addShopPost = (data, token, reset, setLoading) => {
  const formdata = appendFormData(data);
  authPost(`admin/shop`, formdata, token).then((res) => {
    if (res.success) {
      toast.success(res.message);
      reset();
    }
    setLoading(false);
    return res;
  });
};

export const shopUpdate = (url, data, token, shop, setLoading) => {
  const formdata = appendFormData(data, shop);
  updateData(url, formdata, token).then((res) => {
    if (res.success) {
      toast.success(res.message);
    }

    setLoading(false);
    return res;
  });
};
