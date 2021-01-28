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
  extraInfo?: string;
  token?: string;
  expiresIn?: number;
}

export class FbLogin {
  private lastIsLoggedIn: boolean;
  private resolveLoggedIn: () => void;

  initState: Promise<boolean>;
  loggedInPromise: Promise<void>;
  userDetails: UserDetails;
  get isLoggedIn(): boolean {
    return !!this.userDetails;
  }

  constructor(private config: FbLoginConfig) {
    this.loggedInPromise = new Promise(resolveLoggedIn => {
      this.resolveLoggedIn = resolveLoggedIn;
      this.initState = fbInitializer(config.fbAppId).then(
        (authResponse: AuthResponse) => {
          const token: string = authResponse ? authResponse.accessToken : null;
          if (!token) {
            return false;
          }

          if (!this.userDetails)
            this.userDetails = {
              extraInfo: '',
              facebookId: '',
              id: '',
              name: '',
              token: token,
            };
          this.checkIfLoggedIn();
          return true;
        }
      );
    });
  }

  login(): Promise<UserDetails> {
    return new Promise((resolve) => {
      FB.login((response: StatusResponse) => {
        this.userDetails = response.authResponse
          ? statusResponseToUserDetails(response)
          : null;
        this.checkIfLoggedIn();
        resolve(this.userDetails);
      });
    });
  }

  private checkIfLoggedIn(): void {
    if (!this.lastIsLoggedIn && this.isLoggedIn) {
      this.lastIsLoggedIn = true;
      this.resolveLoggedIn();
    }
  }
}

function statusResponseToUserDetails({
  authResponse,
}: StatusResponse): UserDetails {
  return {
    token: authResponse.accessToken,
    extraInfo: '',
    facebookId: authResponse.userID,
    id: '',
    name: '',
    expiresIn: authResponse.expiresIn,
  };
}
