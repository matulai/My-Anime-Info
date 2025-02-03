import './Button.css';

interface ButtonProps {
  children?: React.ReactNode;
  type: 'primary' | 'secondary' | 'onlyicon' | 'special' | 'iconwithborder';
  onClick?: () => void;
  title?: string;
}

function Button({ children, type, onClick, title }: ButtonProps) {
  const styles = {
    primary: 'button-rectangle color-yellow small',
    secondary: 'button-rectangle color-white small',
    special: 'button-rectangle color-yellow big',
    onlyicon: 'button-icon-no-background',
    iconwithborder: 'button-icon-no-background border-black',
  };

  const className = styles[type] || '';

  return (
    <button className={className} onClick={onClick}>
      {title}
      {children}
    </button>
  );
}

export default Button;
