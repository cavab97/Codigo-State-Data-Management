import {postRequest} from '../../redux/Post/Actions';

export interface PostPayload {
  username: string;
  password: string;
}
export interface LoginRequestAction {
  type: typeof postRequest;
  payload: PostPayload;
}
