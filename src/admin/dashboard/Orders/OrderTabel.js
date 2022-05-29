const OrderTabel = () => {
  const tableDate = [];

  let tabeRow;
  if (tableDate.length === 0) {
    tabeRow = <p>Not Orders Found </p>;
  } else {
    tabeRow = tableDate.map((date, key) => (
      <tr key={key}>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    ));
  }

  return (
    <div className="row">
      <div className="col-12">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Clalmed</th>
              <th scope="col">Transmit</th>
              <th scope="col">Flag</th>
              <th scope="col">Date/Time</th>
              <th scope="col">Restaurent</th>
              <th scope="col">Payment</th>
              <th scope="col">Shipping</th>
              <th scope="col">Customer</th>
            </tr>
          </thead>
          <tbody>{tabeRow}</tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTabel;
