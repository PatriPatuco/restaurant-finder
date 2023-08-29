import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import Filter from "./Filter";
import RestaurantsData from "../services/RestaurantsData.js";


const Landing = () => {

const renderRestaurants = () =>
  RestaurantsData.map((restaurant, index) => (
    <RestaurantCard
      className="landing__content--restaurants--item"
      key={index}
      image={restaurant.image}
      name={restaurant.name}
      type={restaurant.type}
      price={restaurant.price}
    />
  ));


  console.log(renderRestaurants)

    return (
      <div>
        <Header />
        <section className="landing__content">
            <Filter/>
          
          <section className="landing__content--restaurants">
            {renderRestaurants()}
          </section>
        </section>
      </div>
    );
}

export default Landing;