import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import Cookies from "universal-cookie";
import { setCategories } from "../../../store/catrgories/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getUserData,
  updateData,
} from "../../../__lib__/helpers/HttpService";
import toast from "react-hot-toast";

const options = [
  { label: "Featured", value: "Featured" },
  { label: "Alcohol", value: "Alcohol" },
  { label: "Discount", value: "Discount" },
  { label: "Ineligible", value: "Ineligible" },
  { label: "In-store Only", value: "In-store Only" },
  { label: "Loyalty Reward", value: "Loyalty Reward" },
  { label: "Photo Hidden", value: "Photo Hidden" },
];

const EditModalForm = ({ productId, close, load, setLoad }) => {
  const [selected, setSelected] = useState([]);
  const [ProSelected, setProSelected] = useState([]);
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const seledtedOptions = selected.map((item) => item.value);
  const proSeledtedOptions = ProSelected.map((item) => item.value);

  const dispatch = useDispatch();
  const router = useRouter();
  const cookies = new Cookies();
  const token = cookies.get("_admin");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state);

  useEffect(() => {
    productId &&
      getUserData(`admin/product/${productId}`, token).then((res) => {
        console.log(res?.options);
        setProduct(res);
        const newSelect = res?.options.map((item) => ({
          label: item,
          value: item,
        }));
        const newProSelect = res?.property?.options.map((item) => ({
          label: item,
          value: item,
        }));
        setSelected(newSelect);
        setProSelected(newProSelect);
      });
  }, [productId, token]);

  const onSubmit = (data) => {
    setLoading(true);
    var formdata = new FormData();
    formdata.append("product_name", data.product_name || product?.product_name);
    formdata.append("description", data.description || product?.description);
    formdata.append("category", data.category || product?.category);
    formdata.append("image", data.image[0] || product?.image);
    formdata.append("options", seledtedOptions || product?.options);
    // formdata.append("shop", shopId);
    formdata.append(
      "cata_title",
      data.cata_title || product?.catalog?.product_type.cata_title
    );
    formdata.append(
      "cata_price",
      data.cata_price || product?.catalog?.product_type.cata_price
    );
    formdata.append(
      "property_name",
      data.property_name || product?.property?.property_name
    );
    formdata.append("limit", data.limit || product?.property?.limit);
    formdata.append(
      "property_option",
      proSeledtedOptions || product?.property?.options
    );
    formdata.append(
      "sele_name",
      data.name || product?.property?.selection.name
    );
    formdata.append(
      "large_price",
      data.large_price || product?.property?.selection.large_price
    );
    formdata.append(
      "xlarge_price",
      data.xlarge_price || product?.property?.selection.xlarge_price
    );
    // formdata.append("name", data.name);

    updateData(`admin/product/${productId}`, formdata, token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        setLoad(!load);
        close();
      }
      setLoading(false);
    });
  };

  // console.log(image);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={product?.product_name}
            {...register("product_name")}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="">category</label>
          <select
            {...register("category")}
            className="form-control"
            value={product?.category}
          >
            {categories.categoryList?.map((category, i) => (
              <option key={i} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="">description</label>
        <textarea
          type="text"
          className="form-control"
          defaultValue={product?.description}
          {...register("description")}
          // cols="30"
          rows="8"
        />
      </div>

      <div className="form-group mt-3">
        {image ? (
          <img src={image} style={{ height: "100px", width: "100px" }} alt="" />
        ) : (
          <img
            src={product?.image}
            style={{ height: "100px", width: "100px" }}
            alt=""
          />
        )}

        <input
          type="file"
          className="ml-4"
          {...register("image")}
          onChange={(e) => {
            console.log("okay");
            setImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="">options</label>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
        />
      </div>

      <div className="form-row mt-3">
        <div className="form-group mb-3 col-12">
          <label htmlFor="">Catalog</label>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="">Cata Title</label>
          <input
            defaultValue={product?.catalog?.product_type.cata_title}
            {...register("cata_title")}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Cata Price</label>
          <input
            defaultValue={product?.catalog?.product_type.cata_price}
            {...register("cata_price")}
            type="number"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-row mt-3">
        <div className="form-group col-md-6">
          <label htmlFor="">property_name</label>
          <input
            defaultValue={product?.property?.property_name}
            {...register("property_name")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="">limit</label>
          <input
            defaultValue={product?.property?.limit}
            {...register("limit")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="form-group mt-3 col-md-12">
          <label htmlFor="">options</label>
          <MultiSelect
            options={options}
            value={ProSelected}
            onChange={setProSelected}
            labelledBy="Checkbox"
          />
        </div>
      </div>
      <div className="form-row mt-3">
        <div className="form-group col-md-4">
          <label htmlFor="">name</label>
          <input
            defaultValue={product?.property?.selection.name}
            {...register("name")}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="">large_price</label>
          <input
            defaultValue={product?.property?.selection.large_price}
            {...register("large_price")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="">xlarge_price</label>
          <input
            defaultValue={product?.property?.selection.xlarge_price}
            {...register("xlarge_price")}
            type="number"
            className="form-control"
          />
        </div>
      </div>

      <div className="text-center mt-3">
        {loading ? (
          <div className="btn btn-primary ml-auto px-4">
            <div
              className="spinner-border text-light"
              style={{ height: "20px", width: "20px" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary d-block  m-auto">
            Update Product
          </button>
        )}
      </div>
    </form>
  );
};

export default EditModalForm;
