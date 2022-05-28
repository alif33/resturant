import { FaEye } from "react-icons/fa";
import { BsTools, BsCircleFill } from "react-icons/bs";

const RestaurentTable = () => {
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
            <tr>
              <th scope="row">99</th>
              <td>Shiva Indian Restaurent</td>
              <td>Mittagong</td>
              <td>+61 02 4872 3292</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="open"></span>
                  {/* <span className="close-icon"></span> */}
                  Open
                </div>
              </td>
              <td>
                <span className="badge badge-success">
                  <FaEye />
                </span>
              </td>
              <td>
                <span className="badge badge-success">live</span>
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
            <tr>
              <th scope="row">99</th>
              <td>Shiva Indian Restaurent</td>
              <td>Mittagong</td>
              <td>+61 02 4872 3292</td>
              <td>
                <div className="d-flex align-items-center">
                  {/* <span className="open"></span> */}
                  <span className="close-icon"></span>
                  Close
                </div>
              </td>
              <td>
                <span className="badge badge-success">
                  <FaEye />
                </span>
              </td>
              <td>
                <span className="badge badge-success">live</span>
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
            <tr>
              <th scope="row">99</th>
              <td>Shiva Indian Restaurent</td>
              <td>Mittagong</td>
              <td>+61 02 4872 3292</td>
              <td>
                <div className="d-flex align-items-center">
                  <span className="open"></span>
                  {/* <span className="close-icon"></span> */}
                  Open
                </div>
              </td>
              <td>
                <span className="badge badge-success">
                  <FaEye />
                </span>
              </td>
              <td>
                <span className="badge badge-success">live</span>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurentTable;
