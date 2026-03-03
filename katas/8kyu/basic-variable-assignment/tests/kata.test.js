import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import ts from 'typescript';

import { basic_variable_assignment as basicVariableAssignmentJs } from '../js/solutions.js';

describe('8kyu - Basic Variable Assignment (JS)', () => {
  test('devuelve exactamente "codewa.rs"', () => {
    expect(basicVariableAssignmentJs()).toBe('codewa.rs');
  });
});

describe('8kyu - Basic Variable Assignment (TS)', () => {
  test('devuelve exactamente "codewa.rs"', async () => {
    const tsFilePath = resolve(
      process.cwd(),
      'katas/8kyu/basic-variable-assignment/ts/solutions.ts'
    );
    const tsSource = readFileSync(tsFilePath, 'utf8');

    // Compila TypeScript en memoria a ESM para poder importarlo en Jest sin ts-jest.
    const compiled = ts.transpileModule(tsSource, {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
      fileName: 'solutions.ts',
    });

    const moduleUrl = `data:text/javascript,${encodeURIComponent(compiled.outputText)}`;
    const tsModule = await import(moduleUrl);

    expect(tsModule.basic_variable_assignment()).toBe('codewa.rs');
  });
});
