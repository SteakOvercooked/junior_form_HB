import styles from './select_item.module.scss';
import type { Option } from '../../types';
import { useRef } from 'react';

type SelectItemProps = Omit<Option, 'value'> & {
  onSelected: (id: string) => void;
};

export const SelectItem = ({ id, text, onSelected }: SelectItemProps) => {
  const labelRef = useRef<HTMLLabelElement>(null);
  const onClick = () => {
    labelRef.current?.click();
    onSelected(id);
  };

  return (
    <li className={styles.item}>
      <div className={styles.itemContent} onClick={onClick}>
        <label htmlFor={id} ref={labelRef} className={styles.label}>
          {text}
        </label>
      </div>
    </li>
  );
};
