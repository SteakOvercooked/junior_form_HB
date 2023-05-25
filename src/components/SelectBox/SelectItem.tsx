import styles from './select_item.module.scss';
import { useRef } from 'react';

type SelectItemProps = {
  id: string;
  text: string;
  onSelected: (id: string) => void;
};

export const SelectItem = (props: SelectItemProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const onClick = () => {
    labelRef.current?.click();
    props.onSelected(props.id);
  };

  return (
    <li className={styles.item}>
      <div className={styles.itemContent} onClick={onClick}>
        <label htmlFor={props.id} ref={labelRef} className={styles.label}>
          {props.text}
        </label>
      </div>
    </li>
  );
};
