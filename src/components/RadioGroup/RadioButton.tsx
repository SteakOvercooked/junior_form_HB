import styles from './radio_button.module.scss';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

type RadioButtonProps = Omit<React.HTMLAttributes<HTMLInputElement>, 'type'> &
  React.PropsWithChildren & {
    id: string;
    name: string;
    value: string;
    register: UseFormRegister<FieldValues>;
  };

export const RadioButton = (props: RadioButtonProps) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.radioButton}
        type='radio'
        id={props.id}
        value={props.value}
        {...props.register(props.name)}
      />
      {props.children}
    </label>
  );
};
