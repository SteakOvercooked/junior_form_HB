import styles from './checkbox.module.scss';
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type CheckboxProps = {
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={styles.label}>
      <div className={styles.wrapper}>
        <input className={styles.checkbox} type='checkbox' {...props.register(props.name)}></input>
        <FontAwesomeIcon icon={faCheck} className={styles.icon}></FontAwesomeIcon>
      </div>
      {props.label}
    </label>
  );
};
