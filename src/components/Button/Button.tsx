import styles from './button.module.scss';

type ButtontProps = React.HTMLProps<HTMLButtonElement> & {
  text: string;
  styleType: 'bordered' | 'filled';
};

export const Button = ({ styleType, text, ...rest }: ButtontProps) => {
  return (
    <button className={styles[styleType]} {...rest}>
      {text}
    </button>
  );
};
