import styles from '../styles/Row.module.css';

interface RowProps {
  type?: 'horizontal' | 'vertical';
  children: JSX.Element;
}

export const Row = ({ type = 'vertical', children }: RowProps) => {
  const rowClass = `${styles.row} ${
    type === 'horizontal' ? styles.horizontal : styles.vertical
  }`;
  return (
    <div className={ rowClass }>{ children }</div>
  );
};
