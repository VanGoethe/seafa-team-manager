import React from "react";

interface Props {}

export const Dashboard = (props: Props) => {
  return (
    <div className="mt-5">
      {/* <div className="card mt-5 p-3"> */}
      <h1 className="text-white">Dashboard</h1>

      <div
        className="w-100"
        style={{
          display: "flex",
          // justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div
          className="card text-dark"
          style={{ maxWidth: "18rem", margin: "0 10px" }}
        >
          <div className="card-header"></div>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <i
                style={{ fontSize: "30px", color: "#F44336" }}
                className="fas fa-users"
              ></i>
              <div style={{ marginLeft: "15px" }}>25 total players</div>
            </h5>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "18rem", margin: "0 10px" }}>
          <div className="card-header"> </div>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {" "}
              <i
                style={{ fontSize: "30px", color: "#F44336" }}
                className="fas fa-user"
              ></i>
              <div style={{ marginLeft: "15px" }}>18 total boys</div>
            </h5>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "18rem", margin: "0 10px" }}>
          <div className="card-header"></div>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {" "}
              <i
                style={{ fontSize: "30px", color: "#F44336" }}
                className="fas fa-user"
              ></i>
              <div style={{ marginLeft: "15px" }}>25 total girls</div>
            </h5>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "18rem", margin: "0 10px" }}>
          <div className="card-header"></div>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {" "}
              <i
                style={{ fontSize: "30px", color: "#F44336" }}
                className="fas fa-address-book"
              ></i>
              <div style={{ marginLeft: "15px" }}>21 active Accounts</div>
            </h5>
          </div>
        </div>
        <div className="card" style={{ maxWidth: "18rem", margin: "0 10px" }}>
          <div className="card-header"></div>
          <div className="card-body">
            <h5
              className="card-title"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <i
                style={{ fontSize: "30px", color: "#F44336" }}
                className="far fa-address-book"
              ></i>
              <div style={{ marginLeft: "15px" }}>4 inactive accounts</div>
            </h5>
          </div>
        </div>

        {/* <div
          className="card text-dark"
          style={{ maxWidth: "18rem", margin: "0 10px" }}
        >
          <div className="card-header"></div>
          <div className="card-body">
            <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>Warning card title</h5>
          </div>
        </div> */}
        {/* </div> */}
      </div>
      <div className="card p-5">
        <div className="">
          <h3>All Users</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Nationality</th>
                <th scope="col">Adress</th>
                <th scope="col">Position</th>
                <th scope="col">foot</th>
                <th scope="col">Joined at</th>
                <th scope="col">Contract signed</th>
                <th scope="col">last contract signed at</th>
                <th scope="col">Contract expires at</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
