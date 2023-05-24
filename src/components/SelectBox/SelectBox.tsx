import type { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './select_box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FocusEvent, useRef, useState } from 'react';
import { SelectItem } from './SelectItem';

type Option = {
  id: string;
  value: string;
  text: string;
};

type SelectBoxProps = {
  name: string;
  options: Option[];
  register: UseFormRegister<FieldValues>;
};

export const SelectBox = ({ options, ...rest }: SelectBoxProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.focus({ preventScroll: true });
    setOpen((open) => !open);
  };

  const onSelected = (id: string) => {
    const option = options.find((option) => option.id === id);
    setSelected(option!);
    setOpen(false);
  };

  const classOpened = open ? ` ${styles.open}` : '';

  // const onSelectedBlur = (e: FocusEvent) => {
  //   if (e.target.parentNode?.contains(e.relatedTarget)) return;
  //   setOpen(false);
  // };

  return (
    <div className={styles.wrapper + classOpened}>
      {/* <input ref={inputRef} onBlur={onSelectedBlur} type='text' className={styles.focusDummy} /> */}
      <div className={styles.selected} onClick={onClick}>
        <span className={styles.selectedText}>{selected.text}</span>
        <FontAwesomeIcon icon={faAngleDown} className={styles.arrowIcon} />
      </div>
      {open && (
        <ul className={styles.list}>
          {options.map((option) => {
            return (
              <SelectItem
                {...option}
                {...rest}
                key={option.id}
                onSelected={onSelected}></SelectItem>
            );
          })}
        </ul>
      )}
    </div>
  );
};
