import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setCategories } from "../../../../store/catrgories/actions";
import { useRouter } from "next/router";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { label: "Featured", value: "Featured" },
  { label: "Alcohol", value: "Alcohol" },
  { label: "Discount", value: "Discount" },
  { label: "Ineligible", value: "Ineligible" },
  { label: "In-store Only", value: "In-store Only" },
  { label: "Loyalty Reward", value: "Loyalty Reward" },
  { label: "Photo Hidden", value: "Photo Hidden" },
];

const AddProduct = ({ shopId }) => {
  const [selected, setSelected] = useState([]);
  const [ProSelected, setProSelected] = useState([]);

  const seledtedOptions = selected.map((item) => item.value);
  const proSeledtedOptions = ProSelected.map((item) => item.value);

  console.log(seledtedOptions);
  console.log(proSeledtedOptions);

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
  const onSubmit = (data) => {
    var formdata = new FormData();
    formdata.append("product_name", data.product_name);
    formdata.append("description", data.description);
    formdata.append("category", data.category);
    formdata.append("image", data.image[0]);
    formdata.append("options", seledtedOptions);
    formdata.append("shop", shopId);
    formdata.append("cata_title", data.cata_title);
    formdata.append("cata_price", data.cata_price);
    formdata.append("property_name", data.property_name);
    formdata.append("limit", data.limit);
    formdata.append("property_option", proSeledtedOptions);
    formdata.append("sele_name", data.name);
    formdata.append("large_price", data.large_price);
    formdata.append("xlarge_price", data.xlarge_price);
    formdata.append("name", data.name);

    authPost(`admin/product`, formdata, token).then((res) => {
      if (res.success) {
        toast.success(res.message);
        reset();
        router.push(`/admin/restaurant/${shopId}/products`);
      }
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategories());
  }, [dispatch]);

  const { categories } = useSelector((state) => state);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="mb-4">Add a new Product</h5>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Product Name</label>
              <input
                type="text"
                className="form-control"
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

          <button type="submit" className="btn btn-primary d-block mt-3">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

// "Product validation failed: category: Cast to ObjectId failed for value "water" (type string) at path "category" because of "BSONTypeError", property.limit: Cast to Number failed for value "water" (type string) at path "property.limit", property.selection.large_price: Cast to Number failed for value "water" (type string) at path "property.selection.large_price", property.selection.xlarge_price: Cast to Number failed for value "water" (type string) at path "property.selection.xlarge_price""
