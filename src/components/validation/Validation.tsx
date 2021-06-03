import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "hooks";
import { TableComponent } from "./Table";

interface Props {}

export const Validation = (props: Props) => {
  const { getProfiles } = useStoreActions((action) => action.profiles);
  const { profiles, loadingProfiles, errors } = useStoreState(
    (state) => state.profiles
  );

  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <div className="mt-5">
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
      <div className="card p-5">
        <h3>
          List of profiles{" "}
          <span style={{ fontSize: "15px" }}>({profiles?.length})</span>
        </h3>
        <TableComponent loading={loadingProfiles} profiles={profiles} />
      </div>
    </div>
  );
};
