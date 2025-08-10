import '../styles/pages/PageTemplate.css';

const People = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>People & Lifestyle of Odisha</h1>
        <p>Understanding the Vibrant Communities and Way of Life</p>
      </div>
      
      <div className="page-content">
        <div className="people-overview">
          <h2>Demographics and Diversity</h2>
          <div className="image-container">
            <img src="/odisha-people.jpg" alt="Odisha People" />
          </div>
          <p>
            Odisha is home to a diverse population of over 42.86 million people (as per 2011 Census), 
            comprising various ethnic groups, languages, and cultures. The state has a healthy gender 
            ratio of 979 females per 1000 males, which is better than the national average.
          </p>
          <p>
            The population is linguistically diverse, with Odia being the official language spoken by 
            the majority. Significant communities of Hindi, Telugu, and Bengali speakers also reside 
            in the state. Additionally, Odisha has a rich tribal heritage, with about 23% of the 
            population belonging to various Scheduled Tribes.
          </p>
        </div>
        
        <div className="people-sections">
          <div className="people-section">
            <h2>Ethnic Diversity</h2>
            <div className="image-container">
              <img src="/odisha-tribes.jpg" alt="Odisha Tribes" />
            </div>
            <p>
              Odisha is one of the most tribal-populated states in India, with 62 notified Scheduled 
              Tribes. These communities have preserved their unique cultures, languages, and traditions 
              through generations, contributing significantly to the state's cultural mosaic.
            </p>
            <div className="tribes-grid">
              <div className="tribe-card">
                <h3>Santals</h3>
                <p>
                  The largest tribal community in Odisha, primarily found in Mayurbhanj and Keonjhar districts. 
                  Known for their folk dances, music, and traditional festivals like Sohrai and Karma. 
                  They have their own language, Santali, written in the Ol Chiki script.
                </p>
              </div>
              <div className="tribe-card">
                <h3>Konds</h3>
                <p>
                  Found mainly in Koraput, Rayagada, and Malkangiri districts. The Konds are known for 
                  their traditional agricultural practices and forest-based economy. The Dongria Kondhs, 
                  a subgroup, are famous for their worship of Niyam Raja (mountain god).
                </p>
              </div>
              <div className="tribe-card">
                <h3>Saoras</h3>
                <p>
                  Inhabit the hilly regions of southern Odisha. They are known for their intricate wall 
                  paintings called "Saura paintings," which depict their mythology and daily life. 
                  The community primarily speaks the Saura language.
                </p>
              </div>
              <div className="tribe-card">
                <h3>Bhumij</h3>
                <p>
                  Found in Mayurbhanj district, they are known for their unique customs and traditional 
                  practices. The community has a rich tradition of folk music and dance, which are 
                  integral to their festivals and celebrations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="people-section">
            <h2>Languages and Literature</h2>
            <div className="image-container">
              <img src="/odisha-languages.jpg" alt="Odisha Languages" />
            </div>
            <p>
              Odisha is linguistically diverse, with Odia being the predominant language. Odia, one of 
              the classical languages of India, has a rich literary tradition spanning over a millennium.
            </p>
            <div className="languages-grid">
              <div className="language-card">
                <h3>Odia</h3>
                <p>
                  The official language of Odisha, spoken by about 85% of the population. Odia literature 
                  has produced renowned poets, novelists, and playwrights. The language was conferred 
                  classical language status in 2014.
                </p>
              </div>
              <div className="language-card">
                <h3>Tribal Languages</h3>
                <p>
                  Odisha is home to several tribal languages including Santali, Kui, Kuvi, and Saura. 
                  These languages have rich oral traditions and are integral to the cultural identity 
                  of the respective communities.
                </p>
              </div>
              <div className="language-card">
                <h3>Other Languages</h3>
                <p>
                  Hindi, Telugu, and Bengali are widely spoken, especially in urban areas. English is 
                  understood in cities and among the educated population, serving as a link language 
                  for business and education.
                </p>
              </div>
            </div>
          </div>
          
          <div className="people-section">
            <h2>Village Life and Traditions</h2>
            <div className="image-container">
              <img src="/odisha-village-life.jpg" alt="Odisha Village Life" />
            </div>
            <p>
              Village life in Odisha is characterized by close-knit communities, traditional occupations, 
              and deep-rooted cultural practices. Agriculture remains the primary occupation, with 
              rice being the main crop.
            </p>
            <div className="village-aspects">
              <div className="village-aspect">
                <h3>Community Living</h3>
                <p>
                  Villages in Odisha are known for their strong sense of community. Joint family systems 
                  are still prevalent, and community participation in festivals and rituals is significant. 
                  Traditional village councils (Panchayats) play an important role in local governance.
                </p>
              </div>
              <div className="village-aspect">
                <h3>Traditional Occupations</h3>
                <p>
                  Besides agriculture, traditional occupations include handicrafts, pottery, weaving, 
                  and metalwork. Many families have been engaged in these occupations for generations, 
                  passing down skills and techniques to their descendants.
                </p>
              </div>
              <div className="village-aspect">
                <h3>Festivals and Rituals</h3>
                <p>
                  Village life revolves around agricultural cycles and religious festivals. Events like 
                  Nuakhai (harvest festival), Raja Parba (celebrating womanhood), and Durga Puja are 
                  celebrated with great enthusiasm and community participation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="people-section">
            <h2>Urban Lifestyle</h2>
            <div className="image-container">
              <img src="/modern-odisha.jpg" alt="Modern Odisha" />
            </div>
            <p>
              Urbanization has brought modern influences to Odisha, especially in cities like Bhubaneswar, 
              Cuttack, and Rourkela. The younger generation is increasingly adopting modern lifestyles 
              while maintaining their cultural identity.
            </p>
            <div className="urban-aspects">
              <div className="urban-aspect">
                <h3>Education and Career</h3>
                <p>
                  Odisha has made significant progress in education, with a literacy rate of 73.45% 
                  (2011 Census). Cities house prestigious institutions like IIT Bhubaneswar, NIT Rourkela, 
                  and AIIMS Bhubaneswar. The state has produced accomplished professionals in various fields.
                </p>
              </div>
              <div className="urban-aspect">
                <h3>Modern Amenities</h3>
                <p>
                  Urban areas offer modern amenities including shopping malls, multiplexes, restaurants, 
                  and recreational facilities. Bhubaneswar, as the capital, has seen rapid infrastructural 
                  development and is emerging as a modern city while preserving its heritage.
                </p>
              </div>
              <div className="urban-aspect">
                <h3>Cultural Blend</h3>
                <p>
                  Urban lifestyle in Odisha represents a blend of tradition and modernity. While people 
                  embrace modern technology and lifestyle, they continue to celebrate traditional festivals, 
                  practice cultural rituals, and enjoy classical arts like Odissi dance and music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
