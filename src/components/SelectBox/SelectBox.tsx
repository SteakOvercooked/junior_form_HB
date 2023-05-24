import type { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './select_box.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { SelectItem } from './SelectItem';

type Option = {
  id: string;
  value: string;
  text: string;
};

type SelectBoxProps = {
  name: string;
  title: string;
  options: Option[];
  register: UseFormRegister<FieldValues>;
};

export const SelectBox = ({ options, name, title, register }: SelectBoxProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const onClick = () => setOpen((open) => !open);

  const onSelected = (id: string) => {
    const option = options.find((option) => option.id === id);
    setSelected(option!);
    setOpen(false);
  };

  useEffect(() => {
    const closeOnClickOutside = (e: MouseEvent) => {
      if (divRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.body.addEventListener('click', closeOnClickOutside);

    return () => document.body.removeEventListener('click', closeOnClickOutside);
  }, []);

  const classOpened = open ? ` ${styles.open}` : '';

  return (
    <div className={styles.wrapper + classOpened} ref={divRef}>
      <span className={styles.title}>{title}</span>
      <div className={styles.selected} onClick={onClick}>
        <span className={styles.selectedText}>{selected.text}</span>
        <FontAwesomeIcon icon={faAngleDown} className={styles.arrowIcon} />
      </div>
      {options.map(({ id, value }) => {
        return (
          <input
            className={styles.native}
            type='radio'
            key={id}
            value={value}
            {...register(name)}
            id={id}></input>
        );
      })}
      <ul className={styles.list}>
        {options.map((option) => {
          return <SelectItem {...option} key={option.id} onSelected={onSelected}></SelectItem>;
        })}
      </ul>
    </div>
  );
};
