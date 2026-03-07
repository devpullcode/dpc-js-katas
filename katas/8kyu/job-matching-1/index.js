import {
  job_matching_1_v1,
  job_matching_1_v2,
  job_matching_1_v3,
} from './js/solutions.js';

export function run() {
  const candidate = {
    minSalary: 50000,
  };

  const job = {
    maxSalary: 50000,
  };

  const versions = [
    ['v1', job_matching_1_v1],
    ['v2', job_matching_1_v2],
    ['v3', job_matching_1_v3],
  ];

  versions.forEach(([name, fn]) => {
    try {
      const result = fn(candidate, job);
      console.log(`Resultado ${name}:`, result);
    } catch (error) {
      console.error(`Error ${name}:`, error.message);
    }
  });
}
