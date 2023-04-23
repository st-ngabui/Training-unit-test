import { AuthStorageService } from './authStorage.service';

describe('test auth service', () => {
  const authStorageService = new AuthStorageService();
  jest.spyOn(Storage.prototype, 'getItem');
  it('getToken is called', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest.fn();
    authStorageService.getToken();
    expect(localStorage.getItem).toBeCalledTimes(1);
    expect(localStorage.getItem).toBeCalledWith('token');
  });

  it('setToken is called with empty token', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    authStorageService.setToken('');
    expect(localStorage.setItem).not.toBeCalled();
  });

  it('setToken is called with not empty token', () => {
    jest.spyOn(Storage.prototype, 'setItem');
    Storage.prototype.setItem = jest.fn();
    authStorageService.setToken('token');
    expect(localStorage.setItem).toBeCalledTimes(1);
    expect(localStorage.setItem).toBeCalledWith('token', 'token');
  });

  it('removeToken is called', () => {
    jest.spyOn(Storage.prototype, 'removeItem');
    Storage.prototype.removeItem = jest.fn();
    authStorageService.removeToken();
    expect(localStorage.removeItem).toBeCalledTimes(1);
    expect(localStorage.removeItem).toBeCalledWith('token');
  });
});
