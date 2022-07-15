import reducer, { UniversityState } from './universities.slice';

describe('universities reducer', () => {
  const initialState: UniversityState = {
    status: 'loading',
    data: [],
  };

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  // TODO: write some more tests
});
