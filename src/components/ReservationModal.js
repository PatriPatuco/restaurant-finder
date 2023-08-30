const ReservationModal = ({restaurant, handleToggleModal}) => {

    const handleClick = () => {
  handleToggleModal();
};


  return (

    <section className="modal">
      <div className="modal__info">
        <button onClick={handleClick}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h3 className="modal__info--title">Nombre del restaurante</h3>
        <p className="modal__info--subtitle">Italiana</p>
        <p className="modal__info--subtitle">€€</p>
        <img className="modal__image" src="../images/almaMater-mediterranea.jpg" alt="almamater" />
        <button className="modal__button--menu">
          <i className="fa-solid fa-clipboard-list modal__buttons--reservation--i"></i>
          Ver carta
        </button>
        <fieldset>
          <legend>Fecha de reserva</legend>
          <label htmlFor="">
            <input type="date" /> <input type="time" /> <input type="number" />
          </label>
          <legend>Datos de reserva</legend>
          <label htmlFor="fullname">Nombre</label>
          <input id="fullname" type="text" placeholder="Nombre y apellido" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="nombre@email.com" />
          <label htmlFor="phone">Teléfono</label>
          <input type="tel" name="" id="phone" placeholder="+34 777 777 777" />
        </fieldset>
        <button className="modal__button--menu">
          <i className="fa-solid fa-clipboard-list modal__buttons--reservation--i"></i>
          Enviar
        </button>
      </div>
    </section>
  );
};

export default ReservationModal;