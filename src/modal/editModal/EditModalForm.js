import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MultiSelect } from "react-multi-select-component";
import Cookies from "universal-cookie";
import { setCategories } from "../../../store/catrgories/actions";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../__lib__/helpers/HttpService";

const options = [
  { label: "Featured", value: "Featured" },
  { label: "Alcohol", value: "Alcohol" },
  { label: "Discount", value: "Discount" },
  { label: "Ineligible", value: "Ineligible" },
  { label: "In-store Only", value: "In-store Only" },
  { label: "Loyalty Reward", value: "Loyalty Reward" },
  { label: "Photo Hidden", value: "Photo Hidden" },
];

const EditModalForm = ({ productId }) => {
  const [selected, setSelected] = useState([ { label: "Featured", value: "Featured" },]);
  const [ProSelected, setProSelected] = useState([]);
  const [product, setProduct] = useState([]);

  const seledtedOptions = selected.map((item) => item.value);
  const proSeledtedOptions = ProSelected.map((item) => item.value);
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
  const onSubmit = (data) => {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state);

  useEffect(() => {
    getData(`products`).then((res) =>
      setProduct(res.filter((pro) => pro._id === productId))
    );
  }, [productId]);

  console.log(product);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={product[0]?.product_name}
            {...register("product_name", { required: true })}
          />
          {errors.product_name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="">category</label>
          <select
            {...register("category", { required: true })}
            className="form-control"
            defaultValue={`new value`}
          >
            {categories.categoryList?.map((category, i) => (
              <option key={i} value={category._id}>
                {category.categoryName}
              </option>
            ))}
          </select>
          {errors.category && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
      </div>

      <div className="form-group mt-3">
        <label htmlFor="">description</label>
        <textarea
          type="text"
          className="form-control"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-danger">This field is required</span>
        )}
      </div>

      <div className="form-group mt-3">
        <label htmlFor="">Image</label>
        <input
          type="file"
          className="ml-4"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="text-danger">This field is required</span>
        )}
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
            {...register("cata_title", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.cata_title && (
            <span className="text-danger">This field is required</span>
          )}
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="">Cata Price</label>
          <input
            {...register("cata_price", { required: true })}
            type="number"
            className="form-control"
          />
          {errors.cata_price && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
      </div>

      <div className="form-row mt-3">
        <div className="form-group col-md-5">
          <label htmlFor="">property_name</label>
          <input
            {...register("property_name", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.property_name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="">limit</label>
          <input
            {...register("limit", { required: true })}
            type="number"
            className="form-control"
          />
          {errors.limit && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group col-md-4">
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
            {...register("name", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="">large_price</label>
          <input
            {...register("large_price")}
            type="number"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="">xlarge_price</label>
          <input
            {...register("xlarge_price")}
            type="number"
            className="form-control"
          />
        </div>
      </div>

      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary d-block  m-auto">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default EditModalForm;
