import { DebounceModel } from '../models/DebounceModel';
import { describe, expect, it, beforeEach, jest } from '@jest/globals';

describe('DebounceModel', () => {
  let debounceModel: DebounceModel;

  beforeEach(() => {
    debounceModel = new DebounceModel();
  });

  it('debe debouncear 1 vez con varias llamadas', async () => {
    const delay = 100;
    const myFnMock = jest.fn();
    const debouncedFn = await debounceModel.debounce(myFnMock, delay);

    await debouncedFn('pajaro');
    await debouncedFn('pajara');
    await debouncedFn('pajare');

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(myFnMock).toHaveBeenCalledTimes(1);
  });

  it('debe debouncear 2 veces con varias llamadas y una parada entre medio', async () => {
    const delay = 100;
    const myFnMock = jest.fn();
    const debouncedFn = await debounceModel.debounce(myFnMock, delay);

    await debouncedFn('pajaro');
    await debouncedFn('pajara');
    await new Promise((resolve) => setTimeout(resolve, 100));

    await debouncedFn('pajaro');
    await debouncedFn('pajara');
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(myFnMock).toHaveBeenCalledTimes(2);
  });
});
