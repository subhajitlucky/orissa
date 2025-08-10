import '../styles/pages/PageTemplate.css';

const Cuisine = () => {
  return (
    <div className="page-template">
      <div className="page-header">
        <h1>Cuisine of Odisha</h1>
        <p>Savoring the Authentic Flavors of the Temple State</p>
      </div>
      
      <div className="page-content">
        <div className="cuisine-overview">
          <h2>Culinary Traditions</h2>
          <div className="image-container">
            <img src="/odisha-cuisine.jpg" alt="Odisha Cuisine" />
          </div>
          <p>
            Odia cuisine is known for its unique flavors, simple preparation methods, and emphasis on 
            fresh ingredients. The cuisine is predominantly vegetarian, with rice serving as the staple food. 
            Odia dishes are characterized by their mild flavors, with a careful balance of spices that 
            enhance rather than overpower the natural taste of ingredients.
          </p>
          <p>
            The cuisine varies across different regions of Odisha, with coastal areas featuring more seafood 
            dishes, while the tribal regions of southern Odisha have their own unique preparations using 
            local ingredients. The northern regions are known for their wheat-based preparations, influenced 
            by neighboring states.
          </p>
        </div>
        
        <div className="cuisine-sections">
          <div className="cuisine-section">
            <h2>Signature Dishes</h2>
            <div className="image-container">
              <img src="/odia-dishes.jpg" alt="Odia Dishes" />
            </div>
            <p>
              Odia cuisine offers a wide variety of dishes that are both delicious and nutritious. 
              The preparation methods are often simple, focusing on preserving the natural flavors 
              of the ingredients.
            </p>
            <div className="dishes-grid">
              <div className="dish-card">
                <h3>Dalma</h3>
                <p>
                  A lentil and vegetable stew that is a staple in Odia households. Made with toor dal, 
                  vegetables like pumpkin, raw banana, and eggplant, and flavored with turmeric and cumin. 
                  It's typically served with rice and represents the essence of Odia home cooking.
                </p>
              </div>
              <div className="dish-card">
                <h3>Machha Jhola</h3>
                <p>
                  A flavorful fish curry made with mustard oil, turmeric, and a blend of spices. 
                  The curry has a distinctive taste due to the use of kalo jeera (black cumin) and 
                  is typically prepared with freshwater fish like rohu or catfish.
                </p>
              </div>
              <div className="dish-card">
                <h3>Chhencheda</h3>
                <p>
                  A delicious curry made with chhena (cottage cheese) and potato in a rich, spiced gravy. 
                  The dish is flavored with cardamom, cinnamon, and other whole spices, giving it a 
                  unique aroma and taste.
                </p>
              </div>
              <div className="dish-card">
                <h3>Santula</h3>
                <p>
                  A mixed vegetable curry with six different vegetables, hence the name "santula" 
                  (meaning six in Odia). The vegetables are cooked with minimal spices to retain 
                  their natural flavors and textures.
                </p>
              </div>
              <div className="dish-card">
                <h3>Pakhala Bhata</h3>
                <p>
                  Fermented rice served with curries, especially popular during summer months. 
                  The rice is soaked in water overnight and served cold, often accompanied by 
                  green chutney, pickle, and fried fish or potato curry.
                </p>
              </div>
              <div className="dish-card">
                <h3>Khichudi</h3>
                <p>
                  A comforting dish made with rice and lentils, cooked with turmeric and cumin. 
                  It's often served with fried eggplant curry (bengan bharta) and is considered 
                  a complete meal in itself.
                </p>
              </div>
            </div>
          </div>
          
          <div className="cuisine-section">
            <h2>Sweets and Desserts</h2>
            <div className="image-container">
              <img src="/odisha-sweets.jpg" alt="Odisha Sweets" />
            </div>
            <p>
              Odisha is renowned for its sweets, particularly those offered as Prasad at the Jagannath 
              Temple in Puri. The state has a rich tradition of sweet-making, with many sweets having 
              religious and cultural significance.
            </p>
            <div className="sweets-grid">
              <div className="sweet-card">
                <h3>Rasgulla</h3>
                <p>
                  Soft, spongy balls made from chhena (cottage cheese) and semolina, cooked in 
                  light sugar syrup. Though now popular across India, rasgulla originated in Odisha 
                  and was later adapted by Bengal.
                </p>
              </div>
              <div className="sweet-card">
                <h3>Chhena Poda</h3>
                <p>
                  Literally meaning "burnt cheese," this is considered the state's most iconic sweet. 
                  Made from chhena, sugar, and semolina, it's baked until the top layer becomes 
                  caramelized and golden brown.
                </p>
              </div>
              <div className="sweet-card">
                <h3>Malpua</h3>
                <p>
                  Deep-fried pancakes made from flour, milk, and sugar, often served with rabri 
                  (thickened milk) and dry fruits. They are especially popular during festivals 
                  and religious occasions.
                </p>
              </div>
              <div className="sweet-card">
                <h3>Pitha</h3>
                <p>
                  Traditional rice cakes made during festivals, especially during Raja Parba and 
                  Durga Puja. Different varieties include chakuli pitha, poda pitha, and chitau pitha, 
                  each with its unique preparation method and flavor.
                </p>
              </div>
            </div>
          </div>
          
          <div className="cuisine-section">
            <h2>Regional Variations</h2>
            <div className="image-container">
              <img src="/regional-odisha-cuisine.jpg" alt="Regional Odisha Cuisine" />
            </div>
            <p>
              Odisha's cuisine varies significantly across its different regions, with each area 
              having its own unique specialties and flavor profiles.
            </p>
            <div className="regional-cuisines">
              <div className="regional-cuisine">
                <h3>Coastal Cuisine</h3>
                <p>
                  The coastal regions are known for their seafood preparations, including fish 
                  curries, prawn dishes, and crab preparations. Mustard oil and panch phoron 
                  (a five-spice blend) are commonly used.
                </p>
              </div>
              <div className="regional-cuisine">
                <h3>Western Odisha</h3>
                <p>
                  Known for its Sambalpuri cuisine, featuring dishes like pakhala, dalma, and 
                  various preparations made with local vegetables. The region is also famous 
                  for its handloom textiles and traditional crafts.
                </p>
              </div>
              <div className="regional-cuisine">
                <h3>Southern Odisha</h3>
                <p>
                  Influenced by the cuisines of neighboring states like Andhra Pradesh and Chhattisgarh. 
                  The region is known for its spicy preparations and use of local ingredients 
                  like mango and tamarind.
                </p>
              </div>
              <div className="regional-cuisine">
                <h3>Tribal Cuisine</h3>
                <p>
                  The tribal regions have their own unique culinary traditions, with dishes made 
                  from locally available ingredients like bamboo shoots, wild vegetables, and 
                  forest produce. Millets and tubers are commonly used.
                </p>
              </div>
            </div>
          </div>
          
          <div className="cuisine-section">
            <h2>Traditional Cooking Methods</h2>
            <div className="image-container">
              <img src="/traditional-cooking.jpg" alt="Traditional Cooking" />
            </div>
            <p>
              Traditional Odia cooking employs age-old techniques that have been passed down through 
              generations. These methods not only enhance the flavors of the dishes but also preserve 
              their nutritional value.
            </p>
            <div className="cooking-methods">
              <div className="cooking-method">
                <h3>Earthen Pot Cooking</h3>
                <p>
                  Many traditional dishes are still prepared in earthen pots, which impart a distinct 
                  flavor to the food. The pots help in even heat distribution and retain the moisture 
                  in the dishes.
                </p>
              </div>
              <div className="cooking-method">
                <h3>Steaming and Fermentation</h3>
                <p>
                  Techniques like steaming are used for preparing pithas and other traditional sweets. 
                  Fermentation is an important process used in dishes like pakhala and various pickles.
                </p>
              </div>
              <div className="cooking-method">
                <h3>Slow Cooking</h3>
                <p>
                  Many Odia dishes are slow-cooked to develop deep flavors. Dishes like dalma and 
                  various curries are simmered for extended periods to achieve the perfect taste 
                  and consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
