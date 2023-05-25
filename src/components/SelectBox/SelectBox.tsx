import styles from './select_box.module.scss';
import type { RegisteredFieldProps, SelectionFieldProps } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { SelectItem } from './SelectItem';

type RadioNativeProps = RegisteredFieldProps & SelectionFieldProps;

const RadioNative = ({ options, name, register }: RadioNativeProps) => {
  return (
    <>
      {options.map(({ id, value }, idx) => {
        return (
          <input
            className={styles.native}
            type='radio'
            defaultChecked={idx === 0}
            key={id}
            value={value}
            {...register(name)}
            id={id}></input>
        );
      })}
    </>
  );
};

type SelectBoxProps = RegisteredFieldProps &
  SelectionFieldProps & {
    title: string;
  };

export const SelectBox = ({ title, ...selectionProps }: SelectBoxProps) => {
  const options = selectionProps.options;
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
      <RadioNative {...selectionProps} />
      <ul className={styles.list}>
        {options.map((option) => {
          return <SelectItem {...option} key={option.id} onSelected={onSelected}></SelectItem>;
        })}
      </ul>
    </div>
  );
};
