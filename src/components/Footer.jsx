import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Incredible Odisha. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;