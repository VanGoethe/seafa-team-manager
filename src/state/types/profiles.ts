import { Action, Thunk } from "easy-peasy";

export interface Profiles {
  loadingProfiles: boolean;
  profiles: any;
  errors: any;

  request: Action<Profiles>;
  success: Action<Profiles>;
  failure: Action<Profiles>;
  getProfiles: Thunk<Profiles>;
  registerProfile: Thunk<Profiles, any>;
  deleteProfile: Thunk<Profiles, string>;
  validateProfile: Thunk<Profiles, string>;
}
