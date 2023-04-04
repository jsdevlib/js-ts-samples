import { Error, Result, ResultEmum } from './result.model';

class StubData {
  id: string;
}

describe('Shared:Models: Result Test', () => {
  it('should set data successfully', () => {
    const expectedData: StubData = new StubData();
    expectedData.id = 'foo';

    const result = new Result();
    result.setData(expectedData, 'foo');

    expect(result.code).toBe(ResultEmum.SUCCESS);
    expect(result.data).toBe(expectedData);
    expect(result.errors).toBeFalsy();
    expect(result.message).toBe('foo');
  });

  it('should set error successfully', () => {
    const expectedErrors: Error[] = [new Error('foo', 'foo')];

    const result = new Result();
    result.setError(expectedErrors, 'foo');
    expect(result.code).toBe(ResultEmum.ERROR);
    expect(result.data).toBeFalsy();
    expect(result.errors).toBe(expectedErrors);
    expect(result.message).toBe('foo');
  });
});
