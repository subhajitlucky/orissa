import '../styles/pages/PageTemplate.css';

const News = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>News & Events in Odisha</h1>
        <p>Stay Updated with the Latest Happenings and Celebrations</p>
      </div>
      
      <div className="page-content">
        <div className="news-overview">
          <h2>Recent Developments</h2>
          <div className="image-container">
            <img src="/odisha-news.jpg" alt="Odisha News" />
          </div>
          <p>
            Odisha has been making significant strides in various sectors, including infrastructure, 
            education, and healthcare. The state government has launched several initiatives to improve 
            the quality of life for its citizens and attract investments.
          </p>
          <p>
            The state has consistently ranked high in governance and development indicators, with 
            particular focus on digital transformation, rural development, and social welfare programs.
          </p>
        </div>
        
        <div className="news-sections">
          <div className="news-section">
            <h2>Major Developments</h2>
            <div className="developments-grid">
              <div className="development-card">
                <h3>Bhubaneswar Metro Rail</h3>
                <p>
                  The Bhubaneswar Metro Rail project is underway to improve urban connectivity. 
                  The project aims to reduce traffic congestion and provide efficient public transport 
                  in the capital city.
                </p>
              </div>
              <div className="development-card">
                <h3>Industrial Growth</h3>
                <p>
                  Odisha has attracted significant industrial investments, particularly in steel, 
                  aluminum, and power sectors. The state's mineral resources and strategic location 
                  make it an attractive destination for industries.
                </p>
              </div>
              <div className="development-card">
                <h3>Digital Initiatives</h3>
                <p>
                  The state has launched several e-governance initiatives to improve service delivery 
                  to citizens. Digital literacy programs and IT infrastructure development are key 
                  focus areas.
                </p>
              </div>
              <div className="development-card">
                <h3>Healthcare Advancements</h3>
                <p>
                  New medical colleges and hospitals have been established to improve healthcare 
                  access. The state has also focused on preventive healthcare programs and disease 
                  control measures.
                </p>
              </div>
            </div>
          </div>
          
          <div className="news-section">
            <h2>Upcoming Cultural Events</h2>
            <div className="image-container">
              <img src="/rath-yatra.jpg" alt="Rath Yatra" />
            </div>
            <p>
              Odisha hosts numerous cultural and religious events throughout the year. These events 
              showcase the state's rich cultural heritage and provide a platform for artists and performers.
            </p>
            <div className="events-grid">
              <div className="event-card">
                <h3>Rath Yatra, Puri</h3>
                <p>
                  The world-famous chariot festival of Lord Jagannath, held annually in June-July. 
                  Millions of devotees participate in this UNESCO Intangible Cultural Heritage event, 
                  making it one of the largest religious gatherings in the world.
                </p>
              </div>
              <div className="event-card">
                <h3>Konark Dance Festival</h3>
                <p>
                  An annual classical dance festival held in December at the backdrop of the 
                  Konark Sun Temple. The festival features performances by renowned artists of 
                  various classical dance forms.
                </p>
              </div>
              <div className="event-card">
                <h3>Odisha International Film Festival</h3>
                <p>
                  A celebration of cinema that showcases both national and international films. 
                  The festival promotes cultural exchange and provides a platform for filmmakers 
                  to exhibit their work.
                </p>
              </div>
              <div className="event-card">
                <h3>Nandankanan Bird Festival</h3>
                <p>
                  Held annually at Nandankanan Zoological Park, this festival celebrates bird 
                  diversity and promotes conservation awareness. The event attracts bird watchers 
                  and nature enthusiasts from across the country.
                </p>
              </div>
            </div>
          </div>
          
          <div className="news-section">
            <h2>Festivals and Celebrations</h2>
            <div className="image-container">
              <img src="/odisha-festivals.jpg" alt="Odisha Festivals" />
            </div>
            <p>
              The state celebrates various festivals with great enthusiasm throughout the year. 
              These festivals reflect the cultural diversity and religious harmony of Odisha.
            </p>
            <div className="festivals-grid">
              <div className="festival-card">
                <h3>Durga Puja</h3>
                <p>
                  Celebrated with grandeur in Cuttack and Bhubaneswar, featuring elaborate pandals 
                  and cultural programs. Cuttack's Durga Puja is one of the oldest in India, with 
                  a history spanning over 250 years.
                </p>
              </div>
              <div className="festival-card">
                <h3>Chaitra Parva</h3>
                <p>
                  A spring festival celebrated in March-April, marking the Odia New Year. 
                  It involves traditional music, dance, and the preparation of special delicacies. 
                  People visit temples and participate in community celebrations.
                </p>
              </div>
              <div className="festival-card">
                <h3>Raja Parba</h3>
                <p>
                  A unique 3-day festival celebrating womanhood and the onset of monsoon, usually 
                  in June. Women observe rituals, enjoy traditional games, and prepare special 
                  delicacies. The festival has cultural and agricultural significance.
                </p>
              </div>
              <div className="festival-card">
                <h3>Nuakhai</h3>
                <p>
                  A harvest festival celebrated in Western Odisha with great enthusiasm, usually 
                  in August-September. People offer new rice to deities and celebrate with traditional 
                  dances, music, and community feasts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="news-section">
            <h2>Sports Achievements</h2>
            <div className="image-container">
              <img src="/odisha-sports.jpg" alt="Odisha Sports" />
            </div>
            <p>
              Odisha has produced several accomplished athletes who have represented India at national 
              and international levels. The state has invested significantly in sports infrastructure 
              and talent development.
            </p>
            <div className="sports-achievements">
              <div className="sports-achievement">
                <h3>Hockey Excellence</h3>
                <p>
                  Odisha has become a hub for hockey in India, hosting the Hockey World Cup and 
                  producing Olympic medalists. The state has world-class hockey stadiums and training 
                  facilities in Bhubaneswar and Rourkela.
                </p>
              </div>
              <div className="sports-achievement">
                <h3>Individual Achievements</h3>
                <p>
                  Athletes from Odisha have excelled in various sports including badminton, weightlifting, 
                  and athletics. The state government provides support through sports academies and 
                  scholarship programs.
                </p>
              </div>
              <div className="sports-achievement">
                <h3>Infrastructure Development</h3>
                <p>
                  The state has invested in modern sports infrastructure including stadiums, swimming 
                  pools, and training centers. These facilities have helped in nurturing young talent 
                  and hosting national and international events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
