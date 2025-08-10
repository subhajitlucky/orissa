import '../styles/pages/PageTemplate.css';

const Contact = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>Contribute to This Project</h1>
        <p>Help Make This the Ultimate Resource for Odisha</p>
      </div>
      
      <div className="page-content">
        <div className="image-container">
          <img src="/odisha-contact.jpg" alt="Odisha Contact" />
        </div>
        
        <section className="section">
          <h2>About This Project</h2>
          <p>
            This website is a personal tribute to the beautiful state of Odisha, created with passion 
            and dedication to showcase its rich heritage, culture, and natural beauty. It's an independent 
            project created by a lover of Odisha's incredible diversity and history.
          </p>
          <p>
            If you have suggestions, feedback, or would like to contribute to making this the ultimate 
            resource for information about Odisha, your contributions are welcome!
          </p>
        </section>
        
        <section className="section">
          <h2>How to Contribute</h2>
          <div className="grid-auto-large">
            <div className="card">
              <h3>GitHub Repository</h3>
              <p>
                This project is open source and available on GitHub. You can contribute directly by 
                visiting our repository:
              </p>
              <p>
                <strong>Repository Link: </strong> 
                <a href="https://github.com/subhajitlucky/orissa" target="_blank" rel="noopener noreferrer">
                  github.com/subhajitlucky/orissa
                </a>
              </p>
            </div>
            <div className="card">
              <h3>Ways to Contribute</h3>
              <ul className="contribution-list">
                <li>Share historical facts or interesting information about Odisha</li>
                <li>Provide high-quality photographs of Odisha's landmarks and culture</li>
                <li>Suggest improvements to the website's content or design</li>
                <li>Help with translation to make the content accessible to more people</li>
                <li>Share your travel experiences in Odisha</li>
                <li>Report any inaccuracies or bugs in the website</li>
              </ul>
            </div>
          </div>
        </section>
        
        <div className="image-container">
          <img src="/bhubaneswar-city.jpg" alt="Bhubaneswar City" />
        </div>
        
        <section className="section">
          <h2>Website Feedback</h2>
          <p>
            Your feedback is valuable in making this website better. Whether you notice any inaccuracies, 
            have suggestions for new sections, or want to share what you love about the site, you can 
            contribute through our GitHub repository.
          </p>
          <p>
            Issues and pull requests are welcome on our 
            <a href="https://github.com/subhajitlucky/orissa" target="_blank" rel="noopener noreferrer">
               GitHub repository
            </a>. Together, we can make this the most comprehensive and accurate resource for information 
            about the incredible state of Odisha.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Contact;
