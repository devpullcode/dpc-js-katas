import {
  job_matching_1_v1,
  job_matching_1_v2,
  job_matching_1_v3,
} from '../js/solutions.js';

const implementations = [
  ['v1', job_matching_1_v1],
  ['v2', job_matching_1_v2],
  ['v3', job_matching_1_v3],
];

describe.each(implementations)('8kyu - Job Matching #1 (%s)', (_name, fn) => {
  test('devuelve true cuando job.maxSalary es al menos el 90% de candidate.minSalary', () => {
    const candidate = { minSalary: 100 };
    const job = { maxSalary: 90 };

    expect(fn(candidate, job)).toBe(true);
  });

  test('devuelve false cuando job.maxSalary es menor al 90% de candidate.minSalary', () => {
    const candidate = { minSalary: 100 };
    const job = { maxSalary: 89 };

    expect(fn(candidate, job)).toBe(false);
  });

  test('lanza error si candidate no está definido', () => {
    const job = { maxSalary: 100 };

    expect(() => fn(undefined, job)).toThrow();
  });

  test('lanza error si job no está definido', () => {
    const candidate = { minSalary: 100 };

    expect(() => fn(candidate, undefined)).toThrow();
  });

  test('lanza error si candidate.minSalary falta', () => {
    const candidate = {};
    const job = { maxSalary: 100 };

    expect(() => fn(candidate, job)).toThrow();
  });

  test('lanza error si job.maxSalary falta', () => {
    const candidate = { minSalary: 100 };
    const job = {};

    expect(() => fn(candidate, job)).toThrow();
  });

  test('lanza error si candidate.minSalary no es número finito', () => {
    const candidate = { minSalary: 'abc' };
    const job = { maxSalary: 100 };

    expect(() => fn(candidate, job)).toThrow();
  });

  test('lanza error si job.maxSalary no es número finito', () => {
    const candidate = { minSalary: 100 };
    const job = { maxSalary: 'abc' };

    expect(() => fn(candidate, job)).toThrow();
  });
});
