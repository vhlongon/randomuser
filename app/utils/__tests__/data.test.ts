import { validateData } from '../data';

describe('data utils', () => {
  describe('validateData', () => {
    it('should throw and data is invalid', () => {
      expect(() => validateData('invalid')).toThrow();
    });

    it('should throw and with correct message where data is not valid', () => {
      const data = {
        results: [
          {
            name: {
              title: 'Mr',
              last: 'Gibson',
            },
          },
        ],
      };
      expect(() => validateData(data)).toThrowError(
        /Required in results\.0\.name\.first/
      );
    });

    it('should return user and info when data is valid', () => {
      const data = {
        results: [
          {
            gender: 'female',
            name: {
              title: 'Mr',
              first: 'Gibson',
              last: 'Banks',
            },
            location: {
              street: {
                number: 123,
                name: 'Mockingbird Hill',
              },
              city: 'San Antonio',
              state: 'Texas',
              country: 'United States',
              postcode: '12345',
              coordinates: {
                latitude: '123',
                longitude: '123',
              },
              timezone: {
                offset: '-1:00',
                description: 'Azores, Cape Verde Islands',
              },
            },
            email: 'email@email.com',
            login: {
              uuid: '123',
              username: 'username',
              password: 'password',
              salt: 'salt',
              md5: 'md5',
              sha1: 'sha1',
              sha256: 'sha256',
            },
            dob: {
              date: '2020-01-01T00:00:00.000Z',
              age: 123,
            },
            registered: {
              date: '2020-01-01T00:00:00.000Z',
              age: 123,
            },
            phone: '123',
            cell: '123',
            id: {
              name: 'name',
              value: 'value',
            },
            picture: {
              large: 'http://large.com',
              medium: 'http://medium.com',
              thumbnail: 'http://thumbnail.com',
            },
            nat: 'nat',
          },
        ],
        info: {
          seed: 'seed',
          results: 123,
          page: 123,
          version: 'version',
        },
      };

      expect(validateData(data)).toEqual({
        user: data.results[0],
        info: data.info,
      });
    });
  });
});
