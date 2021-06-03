import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "hooks";
import { TableComponent } from "./Table";

interface Props {}

export const Validation = (props: Props) => {
  const { getProfiles } = useStoreActions((action) => action.profiles);
  const { profiles, loadingProfiles } = useStoreState(
    (state) => state.profiles
  );

  useEffect(() => {
    getProfiles();
  }, []);
  return (
    <div className="mt-5">
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
