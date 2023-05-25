import styles from './toggle.module.scss';
import type { RegisteredFieldProps, TypedInput } from '../../types';
import { useState } from 'react';

type ToggleProps = TypedInput & RegisteredFieldProps;

export const Toggle = ({ name, register, ...rest }: ToggleProps) => {
  const [checked, setChecked] = useState(false);
  const text = checked ? 'On' : 'Off';

  return (
    <label className={styles.toggleLabel}>
      <input
        checked={checked}
        className={styles.toggle}
        type='checkbox'
        {...register(name, {
          onChange: (e) => setChecked(e.target.checked),
        })}
        {...rest}></input>
      {text}
    </label>
  );
};
