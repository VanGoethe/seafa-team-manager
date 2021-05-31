import { thunk, action } from "easy-peasy";
import { client } from "config";
import { Players } from "state/types";

export const PlayersModel: Players = {
  loadingPlayers: false,
  players: [],
  errors: {},

  request: action((state, payload: any) => {
    return (state.loadingPlayers = payload);
  }),

  success: action((state, payload: any) => {
    return (state.players = payload);
  }),

  failure: action((state, payload: any) => (state.errors = payload)),

  getPlayers: thunk(async (actions) => {
    actions.request(false as any);
    actions.request(true as any);
    try {
      const response = await client().get(`/players`);
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
};
