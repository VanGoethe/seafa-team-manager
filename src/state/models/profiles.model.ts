import { thunk, action } from "easy-peasy";
import { client } from "config";
import { Profiles } from "state/types";

export const ProfilesModel: Profiles = {
  loadingProfiles: false,
  profiles: [],
  errors: {},

  request: action((state, payload: any) => {
    return (state.loadingProfiles = payload);
  }),

  success: action((state, payload: any) => {
    return (state.profiles = payload);
  }),

  failure: action((state, payload: any) => (state.errors = payload)),

  getProfiles: thunk(async (actions) => {
    actions.request(false as any);
    actions.request(true as any);
    try {
      const response = await client().get(`/profile`);
      if (response?.data) {
        actions.request(false as any);
        actions.success(response.data as any);
      }
    } catch (error) {
      actions.request(false as any);
      actions.failure(error.response ? error.response.data : null);
      console.log(error.response.data);
    }
  }),

  registerProfile: thunk(async (actions, payload: any) => {
    actions.request(false as any);
    actions.request(true as any);
    try {
      const response = await client().post(
        `/profile/${payload.player}`,
        payload.data
      );
      if (response?.data) {
        await actions.getProfiles();
        actions.request(false as any);
      }
    } catch (error) {
      actions.request(false as any);
      actions.failure(error.response ? error.response.data : null);
      console.log(error.response.data);
    }
  }),

  deleteProfile: thunk(async (actions, payload: any) => {
    actions.request(false as any);
    actions.request(true as any);
    try {
      const response = await client().delete(`/profile/${payload}`);
      if (response?.data) {
        await actions.getProfiles();
        actions.request(false as any);
      }
    } catch (error) {
      actions.request(false as any);
      actions.failure(error.response ? error.response.data : null);
      console.log(error.response.data);
    }
  }),
  validateProfile: thunk(async (actions, payload: any) => {
    actions.request(false as any);
    actions.request(true as any);
    try {
      const response = await client().put(
        `/profile/validation/${payload.id}`,
        payload.data
      );
      if (response?.data) {
        await actions.getProfiles();
        actions.request(false as any);
      }
    } catch (error) {
      actions.request(false as any);
      actions.failure(error.response ? error.response.data : null);
      console.log(error.response.data);
    }
  }),
};
