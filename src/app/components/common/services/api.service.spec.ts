import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  it('#getValue should return real value', () => {
    expect(service.getUsers()).toBe('real value');
  });
});
