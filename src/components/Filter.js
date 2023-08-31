import { useState } from "react";

const Filter = ({ handleSelectFilter }) => {
 const [selectedFilter, setSelectedFilter] = useState([]);

 const handleChange = (ev) => {
   const value = ev.target.value;
   if (selectedFilter.includes(value)) {
     setSelectedFilter(selectedFilter.filter((filter) => filter !== value));
   } else {
     setSelectedFilter([...selectedFilter, value]);
   }
   
   handleSelectFilter((prevSelectedFilter) => {
     if (prevSelectedFilter.includes(value)) {
       return prevSelectedFilter.filter((filter) => filter !== value);
     } else {
       return [...prevSelectedFilter, value];
     }
   });
 };

 const isFilterSelected = (value) => selectedFilter.includes(value);

  return (
    <aside>
      <fieldset className="filter">
        <legend className="filter__legend">
          <i className="fa-solid fa-filter filter__icon"></i> Filtrar
        </legend>
        <div>
          <input
            id="italian"
            type="checkbox"
            value="Italiana"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Italiana")}
          />
          <label htmlFor="italian" className="filter__options">
            Italiana
          </label>
        </div>
        <div>
          <input
            id="mediterranean"
            type="checkbox"
            value="Mediterránea"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Mediterránea")}
          />
          <label htmlFor="mediterranean" className="filter__options">
            Mediterránea
          </label>
        </div>
        <div>
          <input
            id="fusion"
            type="checkbox"
            value="Fusión"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Fusión")}
          />
          <label htmlFor="fusion" className="filter__options">
            Fusión
          </label>
        </div>
        <div>
          <input
            id="indian"
            type="checkbox"
            value="India"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("India")}
          />
          <label htmlFor="indian" className="filter__options">
            India
          </label>
        </div>
        <div>
          <input
            id="japanese"
            type="checkbox"
            value="Japonesa"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Japonesa")}
          />
          <label htmlFor="japanese" className="filter__options">
            Japonesa
          </label>
        </div>
        <div>
          <input
            id="oriental"
            type="checkbox"
            value="Oriental"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Oriental")}
          />
          <label htmlFor="oriental" className="filter__options">
            Oriental
          </label>
        </div>
        <div>
          <input
            id="american"
            type="checkbox"
            value="Americana"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Americana")}
          />
          <label htmlFor="american" className="filter__options">
            Americana
          </label>
        </div>
        <div>
          <input
            id="spanish"
            type="checkbox"
            value="Española"
            name="restaurant options"
            onChange={handleChange}
            checked={isFilterSelected("Española")}
          />
          <label htmlFor="spanish" className="filter__options">
            Española
          </label>
        </div>
      </fieldset>
    </aside>
  );
};

export default Filter;
