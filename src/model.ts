import { createForm } from '@effective-forms/core';

const form1 = createForm({
  fields: {},
  validator: () => ({ result: true }),
});
const form2 = createForm({
  fields: {},
  validator: () => ({ result: true }),
});

console.log(form1.$values.sid, form2.$values.sid);
