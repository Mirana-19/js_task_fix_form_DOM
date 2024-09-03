'use strict';

// write code here
const refs = {
  inputs: [...document.querySelectorAll('input')],
  fields: [...document.querySelectorAll('fields')],
};

for (const input of refs.inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = input.name;

  input.closest('.field').appendChild(label);
}
