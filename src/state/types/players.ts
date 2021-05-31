import { Action, Thunk } from "easy-peasy";

export interface Players {
  loadingPlayers: boolean;
  players: any;
  errors: any;

  request: Action<Players>;
  success: Action<Players>;
  failure: Action<Players>;
  getPlayers: Thunk<Players>;
}
