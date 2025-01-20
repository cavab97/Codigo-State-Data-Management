import {LOGIN_REQUEST} from '../../redux/Auth/Constants';

export interface LoginPayload {
  username: string;
  password: string;
}
export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: LoginPayload;
}
