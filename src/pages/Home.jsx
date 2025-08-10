import '../styles/pages/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Incredible Odisha</h1>
        <p>The Land of Temples, Culture, and Natural Beauty</p>
        <div className="hero-stats">
          <div className="stat-card">
            <h3>2,500+ Years</h3>
            <p>Rich Cultural Heritage</p>
          </div>
          <div className="stat-card">
            <h3>700+ Temples</h3>
            <p>Architectural Marvels</p>
          </div>
          <div className="stat-card">
            <h3>30 Districts</h3>
            <p>Administrative Divisions</p>
          </div>
        </div>
      </div>
      
      <div className="intro">
        <div className="intro-image">
          <img src="/odisha-map.jpg" alt="Map of Odisha" />
        </div>
        <h2>Discover the Jewel of Eastern India</h2>
        <p>
          Odisha, formerly known as Orissa, is one of India's most historically significant and culturally rich states. 
          With a history spanning over 2,500 years, it was once the heart of the mighty Kalinga Empire and later the 
          prosperous Ganga Dynasty. The state is renowned for its classical dance form Odissi, intricate temple 
          architecture, and vibrant festivals.
        </p>
        <p>
          Bordered by the Bay of Bengal to the east, Odisha is blessed with a 480 km coastline dotted with pristine 
          beaches, ancient ports, and fishing villages. The state is home to three UNESCO World Heritage Sites: 
          the Konark Sun Temple, the Lingaraj Temple, and the Jagannath Temple in Puri.
        </p>
      </div>
      
      <div className="highlights">
        <div className="highlight-card">
          <div className="highlight-image">
            <img src="/konark-temple.jpg" alt="Konark Sun Temple" />
          </div>
          <h3>Architectural Marvels</h3>
          <p>Home to 700+ temples showcasing the distinctive Kalinga style of architecture</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-image">
            <img src="/chilika-lake.jpg" alt="Chilika Lake" />
          </div>
          <h3>Natural Wonders</h3>
          <p>Chilika Lake - Asia's largest brackish water lagoon and home to Irrawaddy dolphins</p>
        </div>
        <div className="highlight-card">
          <div className="highlight-image">
            <img src="/odissi-dance.jpg" alt="Odissi Dance" />
          </div>
          <h3>Cultural Richness</h3>
          <p>Birthplace of Odissi dance, classical music, and traditional crafts like Pipli applique</p>
        </div>
      </div>
      
      <div className="quick-facts">
        <h2>Quick Facts About Odisha</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <h3>Capital</h3>
            <p>Bhubaneswar - India's first planned city</p>
          </div>
          <div className="fact-card">
            <h3>Formation</h3>
            <p>April 1, 1936 - First state to be formed on linguistic basis</p>
          </div>
          <div className="fact-card">
            <h3>Area</h3>
            <p>155,707 km² - 9th largest Indian state</p>
          </div>
          <div className="fact-card">
            <h3>Population</h3>
            <p>42.86 million (2011 Census)</p>
          </div>
          <div className="fact-card">
            <h3>Languages</h3>
            <p>Odia (Official), Hindi, Telugu, Bengali</p>
          </div>
          <div className="fact-card">
            <h3>Famous For</h3>
            <p>Temples, Beaches, Tribes, Crafts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;