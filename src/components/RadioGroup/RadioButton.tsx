import styles from './radio_button.module.scss';
import type { RegisteredFieldProps, TypedInput, Option } from '../../types';

type RadioButtonProps = TypedInput & RegisteredFieldProps & Option;

export const RadioButton = ({ name, register, text, ...rest }: RadioButtonProps) => {
  return (
    <label className={styles.label}>
      <input className={styles.radioButton} type='radio' {...register(name)} {...rest} />
      {text}
    </label>
  );
};
