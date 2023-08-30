import ReservationModal from "./ReservationModal";

import { useState } from "react";

const RestaurantCard = ({ image, name, type, price }) => {
  const [modalOn, setModalOn] = useState(false);

  const handleToggleModal = () => {
    setModalOn(!modalOn);
  };

  const renderModal = () => {
    if (modalOn === true) {
      return <ReservationModal handleToggleModal={handleToggleModal} name={name} image={image} type={type} price={price} />;
    }
  };

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
        <button
          className="restaurantCard__buttons--reservation"
          onClick={handleToggleModal}
        >
          <i className="fa-regular fa-calendar restaurantCard__buttons--reservation--i"></i>
          Hacer reserva
        </button>
        <button className="restaurantCard__buttons--menu">
          <i className="fa-solid fa-clipboard-list restaurantCard__buttons--reservation--i"></i>
          Ver carta
        </button>
      </div>

      {renderModal()}
    </article>
  );
};

export default RestaurantCard;
