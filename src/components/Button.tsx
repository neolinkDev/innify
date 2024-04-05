import styles from '../styles/Button.module.css';

interface ButtonProps {
  children: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={ onClick }
    >
      { children }
    </button>
  );
}

export default Button;
