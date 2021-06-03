import React, { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "hooks";
import { TableComponent } from "./Table";
import { Button, DatePicker } from "antd";
import { SaveOutlined } from "@ant-design/icons";

interface Props {}

export const Profiles = (props: Props) => {
  const [player, setPlayer] = useState(null as unknown);
  const [address, setAddress] = useState(null as unknown);
  const [foot, setFoot] = useState(null as unknown);
  const [position, setPosition] = useState(null as unknown);
  const [lastContract, setLastContract] = useState(null as unknown);
  const [contractExpires, setContractExpires] = useState(null as unknown);
  const [contracts, setContracts] = useState(null as unknown);
  const [joined, setJoinedAt] = useState(null as unknown);
  const [isActive, setIsActive] = useState(null as unknown);

  const { getPlayers } = useStoreActions((action) => action.players);
  const { getProfiles, registerProfile } = useStoreActions(
    (action) => action.profiles
  );

  const { players, loadingPlayers } = useStoreState((state) => state.players);
  const { profiles, loadingProfiles } = useStoreState(
    (state) => state.profiles
  );

  useEffect(() => {
    getPlayers();
    getProfiles();
  }, []);

  const register = () => {
    const data = {
      address,
      foot,
      position,
      joined_at: joined,
      number_of_contract: contracts,
      last_contract_signed_at: lastContract,
      contract_experies_at: contractExpires,
      isActive,
    };
    console.log({ player, data }, "ls");
    registerProfile({ player, data } as any);
  };

  return (
    <div className="mt-2">
      <h1 className="text-white">Profiles</h1>
      <div className="card pt-4 ps-5 pe-5 pb-4">
        <form className="row g-3">
          <div className="col-6">
            <label className="form-label">Player</label>
            <select
              onChange={(el: any) => setPlayer(el.target.value)}
              className="form-select"
            >
              <option selected>Choose...</option>
              {players?.map((pl: any) => (
                <option key={pl._id} value={pl._id}>
                  {pl.firstname} {pl.lastname}
                </option>
              ))}
            </select>
          </div>
          <div className="col-6">
            <label className="form-label">Address</label>
            <input
              type="text"
              onChange={(el: any) => setAddress(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label className="form-label">Foot</label>
            <select
              onChange={(el: any) => setFoot(el.target.value)}
              className="form-select"
            >
              <option selected>Choose...</option>
              <option value="right">Right</option>
              <option value="left">Left</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div className="col-4">
            <label className="form-label">Position</label>
            <input
              type="number"
              onChange={(el: any) => setPosition(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-4">
            <label className="form-label">Joined</label>
            <DatePicker
              className="form-control"
              onChange={(date: any, dateString: any) => setJoinedAt(dateString)}
            />
          </div>

          <div className="col-3">
            <label className="form-label">Contracts</label>
            <input
              type="number"
              onChange={(el: any) => setContracts(el.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-3">
            <label className="form-label">Last contract signed at</label>
            <DatePicker
              className="form-control"
              onChange={(date: any, dateString: any) =>
                setLastContract(dateString)
              }
            />
          </div>
          <div className="col-3">
            <label className="form-label">Contract expires</label>
            <DatePicker
              className="form-control"
              onChange={(date: any, dateString: any) =>
                setContractExpires(dateString)
              }
            />
          </div>
          <div className="col-3">
            <label className="form-label">Active</label>
            <select
              onChange={(el: any) => setIsActive(el.target.value)}
              className="form-select"
            >
              <option selected>Choose...</option>
              <option value={"true"}>Employed</option>
              <option value={"false"}>Unemployed</option>
            </select>
          </div>
          <div className="col-12">
            <Button
              style={{ display: "flex", alignItems: "center" }}
              type="primary"
              icon={<SaveOutlined />}
              onClick={register}
              loading={loadingProfiles}
            >
              Save
            </Button>
          </div>
        </form>
      </div>
      <div className="card mt-3 p-5">
        <div className="">
          <h3>
            List of profiles{" "}
            <span style={{ fontSize: "15px" }}>({profiles?.length})</span>
          </h3>
          <TableComponent loading={loadingProfiles} profiles={profiles} />
        </div>
      </div>
    </div>
  );
};
