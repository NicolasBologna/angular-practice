import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  it('should return a correct path', () => {
    const BASE_URL = 'base_url';
    const PATH = 'path';

    let completeUrl = service['createCompleteRoute'](BASE_URL, PATH);

    expect(completeUrl).toBe('base_url/path');
  });
});
