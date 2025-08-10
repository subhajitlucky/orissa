import '../styles/pages/PageTemplate.css';

const Tourism = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>Tourism in Odisha</h1>
        <p>Exploring the Incredible Destinations of the Temple State</p>
      </div>
      
      <div className="page-content">
        <div className="tourism-overview">
          <h2>Tourism Overview</h2>
          <div className="image-container">
            <img src="/odisha-tourism-places.jpg" alt="Odisha Tourism Places" />
          </div>
          <p>
            Odisha, known as the "Temple State of India," is one of the most attractive tourist destinations 
            in the country. With its rich cultural heritage, stunning architecture, pristine beaches, 
            wildlife sanctuaries, and vibrant festivals, the state offers a diverse range of experiences 
            for travelers from around the world.
          </p>
          <p>
            The state recorded 35.2 million tourist arrivals in 2019-20, generating revenue of ₹8,500 crore. 
            The tourism sector has been growing steadily, with the government focusing on infrastructure 
            development and promotion of both domestic and international tourism.
          </p>
        </div>
        
        <div className="tourism-sections">
          <div className="tourism-section">
            <h2>Heritage Tourism</h2>
            <div className="image-container">
              <img src="/jagannath-temple.jpg" alt="Jagannath Temple" />
            </div>
            <p>
              Odisha is home to some of the most magnificent temples in India, showcasing the distinctive 
              Kalinga style of architecture. The state has three UNESCO World Heritage Sites - the Konark 
              Sun Temple, the Lingaraj Temple, and the Jagannath Temple in Puri.
            </p>
            <div className="heritage-sites">
              <div className="heritage-site">
                <h3>Konark Sun Temple</h3>
                <p>
                  Built in the 13th century by King Narasimhadeva I, this temple is designed in the shape 
                  of a gigantic chariot with 12 pairs of wheels, pulled by seven horses. It's a masterpiece 
                  of Odishan architecture and sculptural art.
                </p>
              </div>
              <div className="heritage-site">
                <h3>Jagannath Temple, Puri</h3>
                <p>
                  One of the Char Dham pilgrimage sites, this 12th-century temple is famous for the annual 
                  Rath Yatra festival. The temple complex is surrounded by a 20-foot-high wall and houses 
                  the deities of Jagannath, Balabhadra, and Subhadra.
                </p>
              </div>
              <div className="heritage-site">
                <h3>Lingaraj Temple, Bhubaneswar</h3>
                <p>
                  The largest temple in Bhubaneswar, dating back to the 11th century. Dedicated to Lord 
                  Shiva, it represents the quintessence of Kalinga architecture and is known for its 
                  intricate carvings and towering spire.
                </p>
              </div>
            </div>
          </div>
          
          <div className="tourism-section">
            <h2>Beach Tourism</h2>
            <div className="image-container">
              <img src="/puri-beach.jpg" alt="Puri Beach" />
            </div>
            <p>
              With a coastline stretching over 480 km, Odisha boasts some of the most beautiful beaches 
              in India. The state's beaches are not only scenic but also hold cultural and religious 
              significance, especially Puri Beach which is visited by millions during the Rath Yatra festival.
            </p>
            <div className="beaches-grid">
              <div className="beach-card">
                <h3>Puri Beach</h3>
                <p>
                  One of the four sacred dhams in Hinduism, this beach is famous for its golden sand 
                  and the annual Rath Yatra festival. The beach offers stunning views of the Bay of Bengal 
                  and is ideal for both relaxation and cultural experiences.
                </p>
              </div>
              <div className="beach-card">
                <h3>Chandrabhaga Beach</h3>
                <p>
                  Located near the Konark Sun Temple, this beach is known for its sunrise views. 
                  According to legend, taking a holy dip here during the Makar Sankranti festival 
                  brings salvation.
                </p>
              </div>
              <div className="beach-card">
                <h3>Gopalpur Beach</h3>
                <p>
                  Known as the "Paradise Beach," it offers a tranquil escape with its pristine sand 
                  and calm waters. The beach is less crowded and perfect for those seeking solitude.
                </p>
              </div>
              <div className="beach-card">
                <h3>Baleswar Beach</h3>
                <p>
                  Also known as Balasore Beach, it's famous for the annual Makar Mela festival. 
                  The beach is known for its golden sand and is ideal for water sports.
                </p>
              </div>
            </div>
          </div>
          
          <div className="tourism-section">
            <h2>Wildlife Tourism</h2>
            <div className="image-container">
              <img src="/simlipal-national-park.jpg" alt="Simlipal National Park" />
            </div>
            <p>
              Odisha's diverse ecosystems support rich biodiversity, with several national parks and 
              wildlife sanctuaries that are home to a variety of flora and fauna. The state is 
              particularly known for its tiger reserves and elephant corridors.
            </p>
            <div className="wildlife-areas">
              <div className="wildlife-area">
                <h3>Simlipal National Park</h3>
                <p>
                  Located in Mayurbhanj district, it's home to tigers, elephants, and over 300 species 
                  of birds. The park covers 2,750 km² and is part of the UNESCO Biosphere Reserve. 
                  It's known for its beautiful waterfalls and dense Sal forests.
                </p>
              </div>
              <div className="wildlife-area">
                <h3>Bhitarkanika National Park</h3>
                <p>
                  Famous for its saltwater crocodiles, the park has the second-largest population of 
                  estuarine crocodiles in India. It's also home to the endangered Olive Ridley sea turtles 
                  and over 200 species of birds.
                </p>
              </div>
              <div className="wildlife-area">
                <h3>Nandankanan Zoological Park</h3>
                <p>
                  One of the few zoos in the world to breed white tigers and Gharials. It houses over 
                  900 species of animals and birds and is spread across 400 acres of forest land.
                </p>
              </div>
            </div>
          </div>
          
          <div className="tourism-section">
            <h2>Tribal Tourism</h2>
            <div className="image-container">
              <img src="/odisha-tribal-tourism.jpg" alt="Odisha Tribal Tourism" />
            </div>
            <p>
              Odisha has a significant tribal population with unique cultures and traditions. Tribal tourism 
              offers visitors a chance to experience the authentic lifestyle of communities like the Santals, 
              Konds, and Saoras. The state has developed several tribal tourism circuits to showcase this 
              rich cultural heritage.
            </p>
            <div className="tribal-destinations">
              <div className="tribal-destination">
                <h3>Koraput</h3>
                <p>
                  Known as the "Land of Tribes," it's home to several indigenous communities including 
                  the Dongria Kondhs, Kutia Kondhs, and Malas. The region is known for its traditional 
                  crafts, festivals, and unique way of life.
                </p>
              </div>
              <div className="tribal-destination">
                <h3>Rayagada</h3>
                <p>
                  A major tribal district with communities like the Konds, Saoras, and Gadabas. 
                  The region is known for its colorful festivals, traditional dances, and handicrafts.
                </p>
              </div>
              <div className="tribal-destination">
                <h3>Malkangiri</h3>
                <p>
                  One of the most remote districts of Odisha, it's home to the Soura tribe, known for 
                  their ancient cave paintings and traditional lifestyle. The region offers a unique 
                  opportunity to experience untouched tribal culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tourism;
