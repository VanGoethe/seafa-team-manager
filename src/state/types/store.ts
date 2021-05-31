import { PlayersModel } from "state/models/players.model";
import { AuthModel } from "state/models/auth.model";

export interface Store {
  auth: typeof AuthModel;
  players: typeof PlayersModel;
}
