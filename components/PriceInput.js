/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(Number(value)));

const formatMoney = Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
}).format;

const PriceInput = ({ type, value, onChange, inputComponent }) => (
  <div>
    <h3>
      {type.title} - {value ? formatMoney(value / 100) : ''}
    </h3>
    <p>{type.description}</p>
    <input
      type={type.name}
      value={value}
      onChange={(event) => onChange(createPatchFrom(event.target.value))}
      ref={inputComponent}
    />
  </div>
);

PriceInput.focus = function () {
  this._inputElement.focus();
};

export default PriceInput;
