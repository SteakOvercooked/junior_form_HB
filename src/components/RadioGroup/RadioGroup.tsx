import styles from './radio_group.module.scss';

type RadioGroupProps = React.PropsWithChildren;

export const RadioGroup = ({ children }: RadioGroupProps) => {
  return <div className={styles.radioGroup}>{children}</div>;
};
