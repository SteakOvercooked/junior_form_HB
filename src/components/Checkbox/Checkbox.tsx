import styles from './checkbox.module.scss';
import type { RegisteredFieldProps, TypedInput } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

type CheckboxProps = TypedInput &
  RegisteredFieldProps & {
    title: string;
  };

export const Checkbox = (props: CheckboxProps) => {
  return (
    <label className={styles.label}>
      <input className={styles.checkbox} type='checkbox' {...props.register(props.name)}></input>
      <FontAwesomeIcon icon={faCheck} className={styles.icon}></FontAwesomeIcon>
      {props.title}
    </label>
  );
};
