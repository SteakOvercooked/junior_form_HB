import React, { useRef } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './select_item.module.scss';

type SelectItemProps = {
  id: string;
  name: string;
  text: string;
  value: string;
  register: UseFormRegister<FieldValues>;
  onSelected: (id: string) => void;
};

export const SelectItem = (props: SelectItemProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { ref: registerRef, ...rest } = props.register(props.name);

  const onClick = (e: React.MouseEvent) => {
    inputRef.current && inputRef.current.checked;
    props.onSelected(props.id);
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.item} onClick={onClick}>
        <label className={styles.label}>
          {props.text}
          <input
            className={styles.native}
            type='radio'
            value={props.value}
            ref={(e) => {
              registerRef(e);
              inputRef.current = e;
            }}
            {...rest}
            id={props.id}></input>
        </label>
      </div>
    </li>
  );
};
