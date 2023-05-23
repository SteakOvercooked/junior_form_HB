import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import styles from './text_field.module.scss';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> &
  UseFormRegisterReturn<string> & {
    label: string;
    error?: string;
  };

export const TextField = (props: InputProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{props.label}</span>
      <input type='text' className={styles.textfield} {...props}></input>
      <span className={styles.error}></span>
    </div>
  );
};
