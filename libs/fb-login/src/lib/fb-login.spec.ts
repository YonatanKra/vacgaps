import { fbLogin } from './fb-login';

describe('fbLogin', () => {
  it('should work', () => {
    expect(fbLogin()).toEqual('fb-login');
  });
});
