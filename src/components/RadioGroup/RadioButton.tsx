import { useState } from 'react';
import styles from './radio_button.module.scss';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

type RadioButtonProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  React.PropsWithChildren & {
    id: string;
    name: string;
    value: string;
    register: UseFormRegister<FieldValues>;
  };

export const RadioButton = ({ name, register, children, ...rest }: RadioButtonProps) => {
  return (
    <label className={styles.label}>
      <input className={styles.radioButton} type='radio' {...register(name)} {...rest} />
      {children}
    </label>
  );
};
