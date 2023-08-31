import { useState } from "react";
import logo from "../images/mpd-logo.png"

const Header = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    handleSearch(value);
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt={logo}></img>
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
          value={searchValue}
          onChange={handleInputChange}
        />
      </label>
    </header>
  );
};

export default Header;
