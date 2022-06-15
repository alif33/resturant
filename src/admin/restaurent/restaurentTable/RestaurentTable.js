import { FaEye } from "react-icons/fa";
import { BsTools, BsCircleFill } from "react-icons/bs";
import Link from "next/link";

const RestaurentTable = ({ shops }) => {
  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Restaurent Name</th>
              <th scope="col">City</th>
              <th scope="col">Phone#</th>
              <th scope="col">Open/Close</th>
              <th scope="col">View on Front</th>
              <th scope="col">Status</th>
              <th scope="col">View Shop</th>
              <th scope="col">
                <div className="text-center">Support</div>
                <div className="row">
                  <div className="col-6 text-center">All</div>
                  <div className="col-6 text-center">New</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {shops?.map((shop, i) => (
              <tr key={i}>
                <th scope="row">99</th>
                <td>{shop.shop_name}</td>
                <td>{shop.address.city}</td>
                <td>{shop.owners_phone}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="open"></span>
                    {/* <span className="close-icon"></span> */}
                    Open
                  </div>
                </td>
                <td>
                  <Link href={`/admin/restaurant/${shop._id}`}>
                    <a className="badge badge-success">
                      <FaEye />
                    </a>
                  </Link>
                </td>
                <td>
                  <span
                    className={
                      shop.shop_status === "Live"
                        ? "badge badge-success"
                        : "badge badge-danger"
                    }
                  >
                    {shop.shop_status}
                  </span>
                </td>
                <td>
                  <span className="badge badge-info">
                    <BsCircleFill />
                  </span>
                </td>
                <td>
                  <div className="row">
                    <div className="col-6 text-center">
                      <span className="badge badge-info">
                        <BsTools />
                      </span>
                    </div>
                    <div className="col-6 text-center">
                      <span className="badge badge-info">
                        <BsTools />
                      </span>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurentTable;
