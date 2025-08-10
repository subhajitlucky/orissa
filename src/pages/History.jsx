import '../styles/pages/PageTemplate.css';

const History = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>5,000 Years of Odisha's History</h1>
        <p>From Ancient Kalinga to Modern Odisha - A Historical Journey</p>
      </div>
      
      <div className="page-content">
        <div className="timeline-container">
          <h2>Historical Timeline</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>3000-1500 BCE</h3>
                <h4>Chalcolithic Period</h4>
                <p>
                  Early settlements in the valleys of Mahanadi, Brahmani, and Baitarani rivers. 
                  Evidence of pottery and tools found at sites like Kansbahal and Sisupalgarh.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1500-600 BCE</h3>
                <h4>Vedic Period</h4>
                <p>
                  Emergence of Janapadas (territorial units) in the region. Establishment of 
                  political units like Kalinga, Utkal, and Koshala.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>600-300 BCE</h3>
                <h4>Mahajanapada Period</h4>
                <p>
                  Kalinga emerged as one of the 16 Mahajanapadas (great kingdoms) of ancient India. 
                  The kingdom extended from the Ganges River in the north to the Godavari River in the south.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>261 BCE</h3>
                <h4>The Kalinga War</h4>
                <p>
                  Emperor Ashoka of the Mauryan Empire fought the brutal Kalinga War, resulting in 
                  the death of 100,000 people. The bloodshed transformed Ashoka, who embraced Buddhism 
                  and propagated Dhamma (righteousness).
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>150 BCE-150 CE</h3>
                <h4>Imperial Kushan Period</h4>
                <p>
                  The Kushan Empire extended into Odisha. This period saw the development of maritime 
                  trade with Southeast Asia and the Roman Empire.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>220-550 CE</h3>
                <h4>Mathara Dynasty</h4>
                <p>
                  The Matharas ruled over parts of coastal Odisha. King Samudragupta's Allahabad 
                  Pillar inscription mentions Kharavela as a powerful ruler of Kalinga.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>4th-12th Century CE</h3>
                <h4>Imperial Guptas & Eastern Gangas</h4>
                <p>
                  The region came under Gupta rule initially, followed by the rise of the Eastern Ganga 
                  Dynasty which ruled for nearly 700 years and built the iconic Jagannath Temple.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>12th-16th Century</h3>
                <h4>Eastern Ganga Dynasty</h4>
                <p>
                  The golden age of Odisha under the Ganga rulers. Construction of the Konark Sun Temple, 
                  Lingaraj Temple, and Jagannath Temple. Development of Odissi dance, music, and literature.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1568-1751</h3>
                <h4>Mughal & Maratha Rule</h4>
                <p>
                  The region was conquered by Sulaiman Karrani of Bengal and later came under Mughal rule. 
                  The Marathas under the Bhonsle dynasty established their dominance in the 18th century.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1751-1947</h3>
                <h4>British Colonial Period</h4>
                <p>
                  Odisha became part of the Bengal Presidency. In 1936, it was separated to form the 
                  new province of Orissa, the first Indian state created on linguistic lines.
                </p>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>1947-Present</h3>
                <h4>Independent India</h4>
                <p>
                  Odisha became a state of independent India. The state has since witnessed significant 
                  development in industry, agriculture, and infrastructure.
                </p>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        
        <div className="historical-sections">
          <div className="historical-section">
            <h2>Ancient Maritime Power</h2>
            <div className="image-container">
              <img src="/ancient-odisha.jpg" alt="Ancient Odisha" />
            </div>
            <p>
              Odisha was one of the earliest maritime powers in Asia, with a flourishing trade network 
              extending from Southeast Asia to the Roman Empire. The region was known as Kalinga in ancient 
              texts and was famous for its elephants, ships, and textiles. Archaeological evidence from 
              sites like Arikamedu and Tamralipti confirms Odisha's role in ancient international commerce.
            </p>
          </div>
          
          <div className="historical-section">
            <h2>The Great Kalinga War</h2>
            <div className="image-container">
              <img src="/kalinga-war.jpg" alt="Kalinga War" />
            </div>
            <p>
              The Kalinga War of 261 BCE fought between Emperor Ashoka and the King of Kalinga was one of 
              the bloodiest battles in ancient Indian history. According to Ashoka's own inscriptions, 
              the war resulted in the death of 100,000 people and the deportation of 150,000 more. 
              The devastation transformed Ashoka, who renounced violence and embraced Buddhism.
            </p>
          </div>
          
          <div className="historical-section">
            <h2>Golden Age of the Gangas</h2>
            <div className="image-container">
              <img src="/eastern-ganga-dynasty.jpg" alt="Eastern Ganga Dynasty" />
            </div>
            <p>
              The Eastern Ganga Dynasty ruled Odisha from the 12th to the 16th century, marking the golden 
              age of Odishan art, architecture, and culture. The dynasty built magnificent temples including 
              the Konark Sun Temple (UNESCO World Heritage Site), the Jagannath Temple in Puri, and the 
              Lingaraj Temple in Bhubaneswar. This period also witnessed the development of Odissi dance, 
              classical music, and the Sarala School of Literature.
            </p>
          </div>
          
          <div className="historical-section">
            <h2>Path to Independence</h2>
            <div className="image-container">
              <img src="/modern-odisha.jpg" alt="Modern Odisha" />
            </div>
            <p>
              Odisha was formed on April 1, 1936, as the first Indian state to be created on linguistic 
              lines. Leaders like Utkalamani Gopabandhu Das, Pandit Nilakantha Das, and Biju Patnaik played 
              crucial roles in the formation of the state and India's independence movement. Biju Patnaik 
              was a prominent freedom fighter who later became the Chief Minister of Odisha.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;