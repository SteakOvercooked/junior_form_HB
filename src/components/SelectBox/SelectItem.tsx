import styles from './select_item.module.scss';

type SelectItemProps = {
  id: string;
  text: string;
  onSelected: (id: string) => void;
};

export const SelectItem = (props: SelectItemProps) => {
  const onClick = () => props.onSelected(props.id);

  return (
    <li className={styles.item}>
      <div className={styles.itemContent} onClick={onClick}>
        <label htmlFor={props.id} className={styles.label}>
          {props.text}
        </label>
      </div>
    </li>
  );
};
