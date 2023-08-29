const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Mesa para Dos</h2>
      <h3 className="header__subtitle">
        Busca y reserva en tus restaurantes favoritos
      </h3>
      <label className="header__finder" htmlFor="search">
        <i className="header__finder--icon fa-solid fa-magnifying-glass"></i>
        <input
        className="header__finder--input"
          type="text"
          placeholder="¿Dónde quieres comer hoy?"
         />
      </label>
    </header>
  );
};

export default Header;
