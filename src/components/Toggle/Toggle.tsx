import type { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './toggle.module.scss';
import { ChangeEvent, useState } from 'react';

type ToggleProps = React.HTMLProps<HTMLInputElement> & {
  name: string;
  register: UseFormRegister<FieldValues>;
};

export const Toggle = (props: ToggleProps) => {
  const [checked, setChecked] = useState(false);
  const { onChange: externalOnChange, ...rest } = props.register(props.name);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    externalOnChange(e);
  };
  const text = checked ? 'On' : 'Off';

  return (
    <label className={styles.toggleLabel}>
      <input
        checked={checked}
        className={styles.toggle}
        type='checkbox'
        onChange={onChange}
        {...rest}></input>
      {text}
    </label>
  );
};
