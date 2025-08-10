import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Incredible Odisha. All rights reserved.</p>
        <p>Designed with ❤️ for the beautiful state of Odisha</p>
      </div>
    </footer>
  );
};

export default Footer;