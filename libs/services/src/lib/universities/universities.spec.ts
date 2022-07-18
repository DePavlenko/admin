import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { UniversitiesService } from './universities';
import { University } from '@roamlerorg/types';

const universitiesService = new UniversitiesService();

const universities: University[] = [
  {
    name: 'AgroParisTech',
    country: 'France',
    domains: ['agroparistech.fr'],
    web_pages: ['http://testwebpage.com'],
  },
  {
    name: 'AgroSup Dijon',
    country: 'France',
    domains: ['agrosupdijon.fr'],
    web_pages: ['http://testwebpage.com'],
  },
];

describe('universitiesService', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return universities list', async () => {
    mock
      .onGet('http://universities.hipolabs.com/search?country=France')
      .reply(200, universities);
    const result = await universitiesService.getUniversities('France');
    expect(result).toEqual(universities);
  });
});
