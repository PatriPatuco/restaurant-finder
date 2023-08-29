const RestaurantCard = ({ image, name, type, price }) => {
  return (
    <article className="restaurantCard">
      <img src={image} alt={image} className="restaurantCard__img" />

      <div className="restaurantCard__text">
        <h4 className="restaurantCard__text--title">{name}</h4>
        <div className="restaurantCard__text--info">
          <p className="restaurantCard__text--info--p">{type}</p>
          <p className="restaurantCard__text--info--p">{price}</p>
        </div>
      </div>
      <div className="restaurantCard__buttons">
        <button className="restaurantCard__buttons--reservation">
          <i className="fa-regular fa-calendar restaurantCard__buttons--reservation--i"></i>
          Hacer reserva
        </button>
        <button className="restaurantCard__buttons--menu">
          <i className="fa-solid fa-clipboard-list restaurantCard__buttons--reservation--i"></i>
          Ver carta
        </button>
      </div>
    </article>
  );
};

export default RestaurantCard;
