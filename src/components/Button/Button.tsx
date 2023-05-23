import styles from './button.module.scss';

type ButtontProps = React.HTMLProps<HTMLButtonElement> &
  React.PropsWithChildren & {
    styleType: 'bordered' | 'filled';
  };

export const Button = ({ children, styleType, ...rest }: ButtontProps) => {
  return (
    <button className={styles[styleType]} {...rest}>
      {children}
    </button>
  );
};
