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

  return (
    <div>
      <Header />
      <section className="landing__content">
        <Filter />

        <section className="landing__content--restaurants">
          <div className="landing__content--restaurants--title">
            <i className="fa-solid fa-utensils landing__content--restaurants--icon"></i>
            <h3 className="landing__content--restaurants--text">
              Restaurantes
            </h3>
          </div>
          {renderRestaurants()}
        </section>
      </section>
    </div>
  );
};

export default Landing;
