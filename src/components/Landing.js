import React, { useState, useEffect } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import Filter from "./Filter";
import RestaurantsData from "../services/RestaurantsData.js";
import Footer from "./Footer";

const Landing = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [search, setSearch] = useState("");

  const handleSelectFilter = (filters) => {
    setSelectedFilters(filters);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const renderRestaurants = () => {
    if (selectedFilters.length === 0 && search === "") {
      return RestaurantsData.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          image={restaurant.image}
          name={restaurant.name}
          type={restaurant.type}
          price={restaurant.price}
        />
      ));
    }

    let filteredRestaurants = RestaurantsData;

    if (selectedFilters.length > 0) {
      filteredRestaurants = filteredRestaurants.filter((restaurant) =>
        selectedFilters.includes(restaurant.type)
      );
    }

    if (search !== "") {
      filteredRestaurants = filteredRestaurants.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filteredRestaurants.length === 0) {
      return (
        <p className="no-results-message">
          Lo sentimos, no hay restaurantes que coincidan con tu búsqueda.
        </p>
      );
    }

    return filteredRestaurants.map((restaurant, index) => (
      <RestaurantCard
        key={index}
        image={restaurant.image}
        name={restaurant.name}
        type={restaurant.type}
        price={restaurant.price}
      />
    ));
  };

  useEffect(() => {
    renderRestaurants();
  }, [selectedFilters, search]);

  return (
    <div>
      <Header handleSearch={handleSearch} />
      <section className="landing__content">
        <Filter handleSelectFilter={handleSelectFilter} />
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
      <Footer/>
    </div>
  );
};

export default Landing;
