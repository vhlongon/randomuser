import { Data } from '@/app/types';

export const mockData: Data = {
  results: [
    {
      gender: 'female',
      name: {
        title: 'Mrs',
        first: 'Zoe',
        last: 'Burns',
      },
      location: {
        street: {
          number: 8892,
          name: 'Albert Road',
        },
        city: 'Canterbury',
        state: 'Durham',
        country: 'United Kingdom',
        postcode: 'M3 7ZU',
        coordinates: {
          latitude: '-6.5103',
          longitude: '168.8188',
        },
        timezone: {
          offset: '+8:00',
          description: 'Beijing, Perth, Singapore, Hong Kong',
        },
      },
      email: 'zoe.burns@example.com',
      login: {
        uuid: 'f1ade025-df6f-40b0-a87b-c1c032f1a21c',
        username: 'sadrabbit183',
        password: 'invis',
        salt: '0x0aSdPI',
        md5: 'de15e92f3f366a20076a5e5232072eb8',
        sha1: 'ff693cb6e842fdcda3de6298c520c6e27e237c92',
        sha256:
          'd3251c4b4c14c100a06442419a447ce7945e65c323a59ecdf645a2455eb726d0',
      },
      dob: {
        date: '1989-12-11T17:41:12.116Z',
        age: 34,
      },
      registered: {
        date: '2002-11-30T13:13:02.379Z',
        age: 21,
      },
      phone: '016973 86473',
      cell: '07323 076857',
      id: {
        name: 'NINO',
        value: 'CP 72 49 24 K',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/18.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/18.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/18.jpg',
      },
      nat: 'GB',
    },
  ],
  info: {
    seed: '712ab5248787c391',
    results: 1,
    page: 1,
    version: '1.4',
  },
};
