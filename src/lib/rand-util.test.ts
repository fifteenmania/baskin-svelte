import { getRandomIntVec } from "./randUtil"
import { it, expect } from 'vitest';

it('getRandomIntVec', () => {
  const randvec = getRandomIntVec(3, 0, 1)
  expect(randvec).toEqual([0, 0, 0])
})