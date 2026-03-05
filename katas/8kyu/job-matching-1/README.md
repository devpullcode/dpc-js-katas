## 📌 Descripción

El objetivo de esta kata es determinar si una oferta de trabajo es compatible con un candidato en función del salario.

La dificultad es baja (8kyu) y está orientada a reforzar conceptos básicos de:

- Manipulación de objetos
- Comparaciones numéricas
- Validación de datos de entrada
- Aplicación de reglas simples de negocio

---

## 🎯 Objetivo

Determinar si el salario ofrecido por un trabajo es suficiente para un candidato.

Para ello se deben comparar:

- el salario mínimo esperado por el candidato
- el salario máximo ofrecido por la empresa

Teniendo en cuenta que el candidato puede aceptar hasta un **10% menos** de su salario mínimo esperado.

---

## 📥 Entrada

La función recibe dos objetos:

### Candidate

Representa al candidato y contiene su salario mínimo esperado.

```text
{
  minSalary: Number
}
```

### Job

Representa una oferta de trabajo y contiene el salario máximo que la empresa puede pagar.

```text
{
  maxSalary: Number
}
```

---

## 📤 Salida esperada

La función debe devolver:

```text
true
```

si el trabajo es aceptable para el candidato, o

```text
false
```

si el salario ofrecido no cumple las expectativas mínimas del candidato.

---

## 🧠 Conceptos trabajados

- Manipulación de objetos
- Acceso a propiedades de objetos
- Comparaciones numéricas
- Validación básica de datos
- Reglas simples de negocio

---

## 🗂️ Estructura del ejercicio

```text
job-matching-1/
  index.js
  js/
    solutions.js
  ts/
    solutions.ts
  tests/
    kata.test.js
  README.md
```

- `solutions.js` → implementación en JavaScript
- `solutions.ts` → implementación en TypeScript
- `kata.test.js` → pruebas automatizadas del comportamiento esperado
- `index.js` → punto de entrada para ejecutar la kata

---

## 🧪 Verificación

El comportamiento correcto se valida mediante tests automatizados.

Las condiciones principales que deben cumplirse son:

- El salario del trabajo debe alcanzar el mínimo aceptable del candidato teniendo en cuenta el margen del 10%.
- Si faltan las propiedades `candidate.minSalary` o `job.maxSalary`, la función debe lanzar un error.

---

## 🔗 Referencia

Ejercicio original disponible en Codewars (nivel 8kyu).

---

## 📝 Notas personales

Este ejercicio forma parte del repositorio de práctica estructurada por niveles.  
Cada kata se desarrolla en una rama independiente y se integra en `main` una vez finalizada.
