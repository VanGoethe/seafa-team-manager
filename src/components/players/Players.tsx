import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "hooks";
import { TableComponent } from "./Table";
import { Button } from "antd";
import { SaveOutlined } from "@ant-design/icons";

interface Props {}

export const Players = (props: Props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState((null as unknown) as number);
  const [gender, setGender] = useState("");
  const [nationality, setNationality] = useState("");

  const { getPlayers, registerPlayer } = useStoreActions(
    (action) => action.players
  );

  const { players, loadingPlayers, errors } = useStoreState(
    (state) => state.players
  );

  useEffect(() => {
    getPlayers();
  }, []);

  const register = () => {
    const data = {
      firstname,
      lastname,
      age,
      gender,
      nationality,
    };
    console.log(data, "ls");
    registerPlayer(data as any);
  };

  return (
    <div className="mt-2">
      <h1 className="text-white">Players</h1>
      {errors.msg ? (
        <div
          className="alert alert-warning alert-dismissible fade show mt-1"
          role="alert"
        >
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
      <div className="card  pt-4 ps-5 pe-5 pb-4">
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">First Name</label>
            <input
              type="text"
              onChange={(el: any) => setFirstname(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              onChange={(el: any) => setLastname(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label className="form-label">Age</label>
            <input
              type="number"
              onChange={(el: any) => setAge(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label className="form-label">gender</label>
            <select
              onChange={(el: any) => setGender(el.target.value)}
              className="form-select"
            >
              <option selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Nationality</label>
            <input
              type="text"
              onChange={(el: any) => setNationality(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-12">
            <Button
              style={{ display: "flex", alignItems: "center" }}
              type="primary"
              icon={<SaveOutlined />}
              onClick={register}
              loading={loadingPlayers}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
      <div className="card mt-3 p-5">
        <div className="">
          <h3>
            List of players{" "}
            <span style={{ fontSize: "15px" }}>({players?.length})</span>
          </h3>
          <TableComponent loading={loadingPlayers} players={players} />
        </div>
      </div>
    </div>
  );
};
