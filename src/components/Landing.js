import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import Filter from "./Filter";


const Landing = () => {
    return (
      <div>
        <Header />
        <section className="landing__content">
            <article className="landing__content--filter"><Filter/></article>
          <article className="landing__content--restList">
            <RestaurantCard className="landing__content--resList--item" />
          </article>
        </section>
      </div>
    );
}

export default Landing;