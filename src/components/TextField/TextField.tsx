import styles from './text_field.module.scss';
import type { ValidatedFieldProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> &
  ValidatedFieldProps & {
    title: string;
    type: 'text' | 'password';
  };

export const TextField = ({ errors, name, register, title, ...rest }: TextFieldProps) => {
  const inputErrors = errors[name];
  const invalid = inputErrors ? ` ${styles.invalid}` : '';

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{title}</span>
      <div className={styles.contentWrapper}>
        <input {...register(name)} {...rest} className={styles.textfield + invalid}></input>
        <FontAwesomeIcon icon={faCircleExclamation} className={styles.errorIcon} />
      </div>
      {inputErrors && <span className={styles.error}>{inputErrors.message as string}</span>}
    </div>
  );
};
