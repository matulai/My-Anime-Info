import './Footer.css';

interface FooterProps {
  isLoading: boolean;
}

const Footer = ({ isLoading }: FooterProps) => {
  return isLoading ? null : (
    <footer className="footer-container">
      <span>© 2025 My Anime Info.</span>
    </footer>
  );
};

export default Footer;
