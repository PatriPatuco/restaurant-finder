const ReservationModal = ({ handleToggleModal, name, image, type, price }) => {
  
  const handleClick = () => {
    handleToggleModal();
  };

  return (
    <section className="modal">
      <div className="modal__content">
        <button className="modal__close-btn" onClick={handleClick}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <section className="modal__info">
          <h3 className="modal__info--title">{name}</h3>
          <p className="modal__info--subtitle">{type} - {price}</p>
          <img className="modal__info--image" src={image} alt={image} />
          <button className="modal__info--button">
            <i className="fa-solid fa-clipboard-list modal__info--button--i"></i>
            Ver carta
          </button>
        </section>
        <fieldset className="modal__form">
          <legend className="modal__form--legend">Fecha de reserva</legend>
          <label className="modal__form--date" htmlFor="">
            <input className="modal__form--date--input" type="date" />|
            <input className="modal__form--date--input" type="time" />|
            <input
              className="modal__form--date--input"
              type="number"
              placeholder="Número de comensales"
            />
            <i class="fa-solid fa-user"></i>
          </label>
          <legend className="modal__form--legend">Datos de reserva</legend>
          <div className="modal__form--customer">
            <label className="modal__form--label" htmlFor="fullname">
              Nombre
            </label>
            <input
              className="modal__form--input "
              id="fullname"
              type="text"
              placeholder="Nombre y apellido"
            />
            <label className="modal__form--label" htmlFor="email">
              Email
            </label>
            <input
              className="modal__form--input "
              type="email"
              id="email"
              placeholder="nombre@email.com"
            />
            <label className="modal__form--label" htmlFor="phone">
              Teléfono
            </label>
            <input
              className="modal__form--input "
              type="tel"
              name=""
              id="phone"
              placeholder="+34 777 777 777"
            />
          </div>
        </fieldset>
        <input className="modal__form--submit" type="submit" />
      </div>
    </section>
  );
};

export default ReservationModal;
