import type { InputHTMLAttributes } from 'react';
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './text_field.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: string;
  name: string;
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
};

export const TextField = (props: InputProps) => {
  const inputErrors = props.errors[props.name];
  const invalid = inputErrors ? ` ${styles.invalid}` : '';

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{props.label}</span>
      <div className={styles.contentWrapper}>
        <input
          {...props.register(props.name)}
          type='text'
          className={styles.textfield + invalid}></input>
        <FontAwesomeIcon icon={faCircleExclamation} className={styles.errorIcon} />
      </div>
      {inputErrors && <span className={styles.error}>{inputErrors.message as string}</span>}
    </div>
  );
};
