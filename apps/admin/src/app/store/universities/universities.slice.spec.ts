import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { University } from '@roamlerorg/types';
import { store } from '../store';
import {
  UniversityState,
  setCountry,
  fetchUniversities,
} from './universities.slice';

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

const mockNetworkResponse = () => {
  const mock = new MockAdapter(axios);
  mock
    .onGet(`http://universities.hipolabs.com/search?country=France`)
    .reply(200, universities);
};

const initialState: UniversityState = {
  country: 'Netherlands',
  status: 'idle',
  data: [],
};

describe('universities reducer', () => {
  beforeAll(() => {
    mockNetworkResponse();
  });

  it('should handle initial state', () => {
    const state = store.getState().universities;
    expect(state).toEqual(initialState);
  });

  it('should handle country change', () => {
    store.dispatch(setCountry('France'));
    const state = store.getState().universities;
    expect(state).toEqual({
      ...initialState,
      country: 'France',
    });
  });

  it('Should be able to fetch the universities list for a specific country', async () => {
    await store.dispatch(fetchUniversities('France'));
    const state = store.getState().universities;
    expect(state.data).toEqual(universities);
  });
});
