import { fbInitializer } from './fb-init/fb-initializer';
import AuthResponse = facebook.AuthResponse;
import StatusResponse = facebook.StatusResponse;

export interface FbLoginConfig {
  fbAppId: string;
}

export interface UserDetails {
  id: string;
  facebookId: string;
  name: string;
  extraInfo: string;
  token?: string;
  expiresIn?: number;
}

export class FbLogin {
  initState: Promise<boolean>;
  userDetails: UserDetails;
  get isLoggedIn(): boolean {
    return !!this.userDetails;
  }

  constructor(private config: FbLoginConfig) {
    this.initState = fbInitializer(config.fbAppId)
      .then((authResponse: AuthResponse) => {
        if (!this.userDetails) this.userDetails = { extraInfo: '', facebookId: '', id: '', name: '' };
        this.userDetails.token = authResponse ? authResponse.accessToken : null;
        return true;
      });
  }

  login(): Promise<UserDetails> {
    return new Promise((resolve) => {
      FB.login((response: StatusResponse) => {
        this.userDetails =  response.authResponse ? statusResponseToUserDetails(response) : null;
        resolve(this.userDetails);
      });
    });
  }
}

function statusResponseToUserDetails({authResponse}: StatusResponse): UserDetails {
  return {token: authResponse.accessToken, extraInfo: '', facebookId: authResponse.userID, id: '', name: '', expiresIn: authResponse.expiresIn }
}
