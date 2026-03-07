// opción 1: versión más básica
export function job_matching_1_v1(candidate, job) {
  if (candidate === undefined || candidate === null)
    throw new Error('Candidate no está definido');

  if (job === undefined || job === null)
    throw new Error('Job no está definido');

  if (candidate.minSalary === undefined || candidate.minSalary === null)
    throw new Error('minSalary sin valor.');

  if (job.maxSalary === undefined || job.maxSalary === null)
    throw new Error('maxSalary sin valor');

  if (!Number.isFinite(candidate.minSalary))
    throw new Error('El valor de minSalary no es un número');

  if (!Number.isFinite(job.maxSalary))
    throw new Error('El valor de maxSalary no es un número');

  const tenPercent = candidate.minSalary * 0.1;
  const adjustedMinSalary = candidate.minSalary - tenPercent;

  if (job.maxSalary >= adjustedMinSalary) return true;
  if (job.maxSalary < adjustedMinSalary) return false;
}

// opción 2: helper reutilizable
export function job_matching_1_v2(candidate, job) {
  const isNil = (v) => v === undefined || v === null;

  function assertFineteNumber(value, name) {
    if (isNil(value)) {
      throw new error(`${name} es obligatorio`);
    }

    if (!Number.isFinite(value)) {
      throw new error(`${name} debe ser un número`);
    }
  }

  if (isNil(candidate) || isNil(job))
    throw new Error('Sin parámetros definidos');

  assertFineteNumber(candidate.minSalary, 'candidate.minSalary');
  assertFineteNumber(job.maxSalary, 'job.maxSalary');

  const tenPercent = candidate.minSalary * 0.1;
  const adjustedMinSalary = candidate.minSalary - tenPercent;

  return job.maxSalary >= adjustedMinSalary;
}

// opción 3: validación por contrato
const fail = (msg) => {
  throw new Error(msg);
};

const isNil = (value) => value === undefined || value === null;

const validateInput = (...values) => {
  values.forEach((v) => {
    isNil(v) && fail('Parámetro no definido');
  });
};

const assertDefined = (fields) => {
  for (const [name, v] of Object.entries(fields)) {
    if (isNil(v)) {
      fail(`${name}, no está definido`);
    }
  }
};

const assertFiniteNumber = (fields) => {
  for (const [name, value] of Object.entries(fields)) {
    if (!Number.isFinite(value)) {
      fail(`${name} debe ser un número`);
    }
  }
};

const calculateAdjustedMinSalary = (candidateValue) => {
  return candidateValue * 0.9;
};

export function job_matching_1_v3(candidate, job) {
  validateInput(candidate, job);

  const fields = {
    candidateMinSalary: candidate.minSalary,
    jobMaxSalary: job.maxSalary,
  };

  assertDefined(fields);
  assertFiniteNumber(fields);

  const adjustedMinSalary = calculateAdjustedMinSalary(candidate.minSalary);

  return job.maxSalary >= adjustedMinSalary;
}
