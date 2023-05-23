import styles from './checkbox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const Checkbox = () => {
  return (
    <label className={styles.label}>
      <div className={styles.wrapper}>
        <FontAwesomeIcon icon={faCheck} className={styles.icon}></FontAwesomeIcon>
        <input className={styles.checkbox} type='checkbox'></input>
      </div>
      Remember me
    </label>
  );
};
