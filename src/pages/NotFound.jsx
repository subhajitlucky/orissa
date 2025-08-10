import { Link } from 'react-router-dom';
import '../styles/pages/PageTemplate.css';

const NotFound = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist</p>
      </div>
      
      <div className="page-content" style={{ textAlign: 'center' }}>
        <section className="section">
          <h2>404 Error</h2>
          <p>
            The page you're looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link to="/" className="nav-brand" style={{ fontSize: '1.2rem', padding: '10px 20px', borderRadius: '5px' }}>
            Go to Home
          </Link>
        </section>
      </div>
    </div>
  );
};

export default NotFound;