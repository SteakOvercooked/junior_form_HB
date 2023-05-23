import styles from './button.module.scss';

type ButtontProps = React.HTMLProps<HTMLButtonElement> &
  React.PropsWithChildren & {
    type: 'bordered' | 'filled';
  };

export const Button = ({ children, type, ...rest }: ButtontProps) => {
  return (
    <button className={styles[type]} {...rest}>
      {children}
    </button>
  );
};
