import React, { useEffect, useState } from "react";
import { TableComponent } from "../validation/Table";
import { useStoreActions, useStoreState } from "hooks";

interface Props {}

export const Dashboard = (props: Props) => {
  const { getPlayers } = useStoreActions((action) => action.players);
  const { players, loadingPlayers } = useStoreState((state) => state.players);
  const { getProfiles } = useStoreActions((action) => action.profiles);
  const { profiles, loadingProfiles, errors } = useStoreState(
    (state) => state.profiles
  );

  const [totalBoys, setTotalBoys] = useState(0 as any);
  const [totalGirls, setTotalGirls] = useState(0 as any);
  const [active, setActive] = useState(0 as any);
  const [inactive, setInactive] = useState(0 as any);

  useEffect(() => {
    getPlayers();
    getProfiles();
  }, []);

  useEffect(() => {
    let length = 0;
    players?.filter((pl: any) => {
      if (pl.gender && pl.gender === "male") {
        return (length = length + 1);
      }
    });
    setTotalBoys(length);
  }, [players]);

  useEffect(() => {
    let length = 0;
    players?.filter((pl: any) => {
      if (pl.gender && pl.gender === "female") {
        return (length = length + 1);
      }
    });
    setTotalGirls(length);
  }, [players]);

  useEffect(() => {
    let lengthActive = 0;
    let lengthInactive = 0;
    profiles?.filter((pl: any) => {
      if (pl.isActive) {
        return (lengthActive = lengthActive + 1);
      } else return (lengthInactive = lengthInactive + 1);
    });
    setActive(lengthActive);
    setInactive(lengthInactive);
  }, [profiles]);

  return (
    <div className="mt-5">
      {/* <div className="card mt-5 p-3"> */}
      <h1 className="italic">SAINT ESPRIT ALUMNI FOOTBALL ACADEMY</h1>

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
              {loadingPlayers ? (
                <div style={{ marginLeft: "15px" }}>loading...</div>
              ) : (
                <div style={{ marginLeft: "15px" }}>
                  {players?.length} total players
                </div>
              )}
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
              <i
                style={{ fontSize: "30px", color: "#F44336" }}
                className="fas fa-user"
              ></i>
              {loadingPlayers ? (
                <div style={{ marginLeft: "15px" }}>loading...</div>
              ) : (
                <>
                  <div style={{ marginLeft: "15px" }}>
                    {totalBoys} total boys
                  </div>
                </>
              )}
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
                className="fas fa-user"
              ></i>
              {loadingPlayers ? (
                <div style={{ marginLeft: "15px" }}>loading...</div>
              ) : (
                <>
                  <div style={{ marginLeft: "15px" }}>
                    {totalGirls} total girls
                  </div>
                </>
              )}
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
                className="fas fa-address-book"
              ></i>
              {loadingProfiles ? (
                <div style={{ marginLeft: "15px" }}>loading...</div>
              ) : (
                <div style={{ marginLeft: "15px" }}>
                  {active} active Accounts
                </div>
              )}
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
                className="fas fa-address-book"
              ></i>
              {loadingProfiles ? (
                <div style={{ marginLeft: "15px" }}>loading...</div>
              ) : (
                <div style={{ marginLeft: "15px" }}>
                  {inactive} inactive Accounts
                </div>
              )}
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
      {errors.msg ? (
        <div className="alert alert-warning alert-dismissible fade show mt-1">
          {errors.msg}
        </div>
      ) : null}
      {errors && errors.errors?.length > 0 ? (
        <ul
          className="alert alert-warning alert-dismissible fade show mt-1 ps-5"
          role="alert"
        >
          {errors.errors.map((err: any) => (
            <li>{err.msg}</li>
          ))}
        </ul>
      ) : null}
      <div className="card p-5">
        <TableComponent loading={loadingProfiles} profiles={profiles} />
      </div>
    </div>
  );
};
