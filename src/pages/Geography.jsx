import '../styles/pages/PageTemplate.css';

const Geography = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>Geography of Odisha</h1>
        <p>Exploring the Diverse Landscapes of India's Eastern Jewel</p>
      </div>
      
      <div className="page-content">
        <div className="geo-overview">
          <h2>Geographical Overview</h2>
          <div className="image-container">
            <img src="/odisha-landscape.jpg" alt="Odisha Landscape" />
          </div>
          <p>
            Odisha, located on the eastern coast of India, is a state of remarkable geographical diversity. 
            Covering an area of 155,707 square kilometers, it ranks as the 9th largest state in India. 
            The state stretches between 17°49'N and 22°34'N latitude and 81°29'E and 87°29'E longitude.
          </p>
          <p>
            Bounded by the Bay of Bengal to the east, Chhattisgarh to the west, Jharkhand to the north, 
            and Andhra Pradesh and Telangana to the south, Odisha enjoys a strategic location that has 
            historically made it a hub of maritime trade and cultural exchange.
          </p>
        </div>
        
        <div className="geo-sections">
          <div className="geo-section">
            <h2>Physical Features</h2>
            <div className="image-container">
              <img src="/odisha-topography.jpg" alt="Odisha Topography" />
            </div>
            <p>
              Odisha's topography can be broadly divided into four distinct regions:
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <h3>Coastal Plains</h3>
                <p>
                  Stretching along the Bay of Bengal for about 480 km, these plains are fertile and 
                  well-irrigated by numerous rivers. They are divided into Northern, Middle, and Southern 
                  Coastal Plains, each with distinct characteristics.
                </p>
              </div>
              
              <div className="feature-card">
                <h3>Central Plateau</h3>
                <p>
                  Covering about 60% of the state's area, this region includes the Eastern Ghats and 
                  consists of rolling hills, valleys, and plateaus. It's rich in mineral resources 
                  including iron ore, bauxite, and coal.
                </p>
              </div>
              
              <div className="feature-card">
                <h3>Eastern Ghats</h3>
                <p>
                  A discontinuous range of mountains running parallel to the coast. The highest peak 
                  is Deomali (1,672 meters) in the Koraput district. These hills are home to dense 
                  forests and tribal communities.
                </p>
              </div>
              
              <div className="feature-card">
                <h3>Northern Plains</h3>
                <p>
                  Formed by the alluvial deposits of the Mahanadi River system, these plains are highly 
                  fertile and support intensive agriculture. The region includes the Mahanadi Delta, 
                  one of the most productive agricultural areas in India.
                </p>
              </div>
            </div>
          </div>
          
          <div className="geo-section">
            <h2>Rivers and Water Resources</h2>
            <div className="image-container">
              <img src="/mahanadi-river.jpg" alt="Mahanadi River" />
            </div>
            <p>
              Odisha is blessed with a network of 12 major rivers and numerous tributaries. The major 
              rivers include:
            </p>
            
            <div className="rivers-list">
              <div className="river-item">
                <h3>Mahanadi</h3>
                <p>
                  The largest river in Odisha, stretching 858 km with a drainage basin of 141,600 km². 
                  It forms a large delta before emptying into the Bay of Bengal. The Hirakud Dam on 
                  Mahanadi is one of the longest earthen dams in the world.
                </p>
              </div>
              
              <div className="river-item">
                <h3>Godavari</h3>
                <p>
                  The second longest river in India, with a portion of its basin in southern Odisha. 
                  It flows for 1,465 km and has a drainage area of 312,812 km².
                </p>
              </div>
              
              <div className="river-item">
                <h3>Krishna</h3>
                <p>
                  Flows for 1,400 km with a drainage basin of 258,948 km². A small portion of its basin 
                  extends into Odisha's southern districts.
                </p>
              </div>
              
              <div className="river-item">
                <h3>Brahmani</h3>
                <p>
                  Formed by the confluence of Sankh and South Koel rivers. It flows for 799 km and 
                  joins the Baitarani to form the Dhamra River.
                </p>
              </div>
              
              <div className="river-item">
                <h3>Baitarani</h3>
                <p>
                  Known as the "Ganges of Odisha," it flows for 371 km and is one of the major rivers 
                  in northern Odisha.
                </p>
              </div>
              
              <div className="river-item">
                <h3>Subarnarekha</h3>
                <p>
                  Flows for 395 km and forms the boundary between Odisha and West Bengal in its lower course.
                </p>
              </div>
            </div>
          </div>
          
          <div className="geo-section">
            <h2>Climate and Seasons</h2>
            <div className="image-container">
              <img src="/odisha-climate.jpg" alt="Odisha Climate" />
            </div>
            <p>
              Odisha experiences a tropical monsoon climate with three distinct seasons:
            </p>
            
            <div className="climate-grid">
              <div className="climate-card">
                <h3>Summer (March - June)</h3>
                <p>
                  Temperatures range from 25°C to 45°C, with May being the hottest month. 
                  Humidity is high, especially in coastal areas.
                </p>
              </div>
              
              <div className="climate-card">
                <h3>Monsoon (June - September)</h3>
                <p>
                  Receives 80-90% of annual rainfall (100-150 cm). The southwest monsoon brings 
                  heavy rains from June to September.
                </p>
              </div>
              
              <div className="climate-card">
                <h3>Winter (October - February)</h3>
                <p>
                  Temperatures range from 15°C to 25°C. The season is pleasant and considered 
                  the best time to visit the state.
                </p>
              </div>
            </div>
          </div>
          
          <div className="geo-section">
            <h2>Flora and Fauna</h2>
            <div className="image-container">
              <img src="/odisha-wildlife.jpg" alt="Odisha Wildlife" />
            </div>
            <p>
              Odisha's diverse ecosystems support rich biodiversity. The state has 5 national parks 
              and 19 wildlife sanctuaries covering about 5.5% of its geographical area.
            </p>
            
            <div className="biodiversity-grid">
              <div className="biodiversity-card">
                <h3>Simlipal National Park</h3>
                <p>
                  Located in Mayurbhanj district, it's home to tigers, elephants, and over 300 species 
                  of birds. The park covers 2,750 km² and is part of the UNESCO Biosphere Reserve.
                </p>
              </div>
              
              <div className="biodiversity-card">
                <h3>Bhitarkanika National Park</h3>
                <p>
                  Famous for its saltwater crocodiles, the park has the second-largest population of 
                  estuarine crocodiles in India. It's also home to the endangered Olive Ridley sea turtles.
                </p>
              </div>
              
              <div className="biodiversity-card">
                <h3>Nandankanan Zoological Park</h3>
                <p>
                  One of the few zoos in the world to breed white tigers and Gharials. It houses over 
                  900 species of animals and birds.
                </p>
              </div>
              
              <div className="biodiversity-card">
                <h3>Chilika Lake</h3>
                <p>
                  Asia's largest brackish water lagoon covering 1,100 km². It's home to over 800 species 
                  of animals and plants, including the endangered Irrawaddy dolphin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geography;
