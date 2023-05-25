import type { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

export type RegisteredFieldProps = {
  name: string;
  register: UseFormRegister<FieldValues>;
};

export type ValidatedFieldProps = RegisteredFieldProps & {
  errors: FieldErrors;
};

export type Option = {
  id: string;
  value: string;
  text: string;
};

export type SelectionFieldProps = {
  options: Option[];
};

export type TypedInput = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;
