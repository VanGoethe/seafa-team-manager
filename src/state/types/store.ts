import { PlayersModel } from "state/models/players.model";
import { AuthModel } from "state/models/auth.model";
import { ProfilesModel } from "state/models/profiles.model";

export interface Store {
  auth: typeof AuthModel;
  players: typeof PlayersModel;
  profiles: typeof ProfilesModel;
}
