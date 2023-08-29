const Filter = () => {
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
              value="italian restaurant"
              name="restaurant options"
            />
            <label htmlFor="italian" className="filter__options">
              Italiana
            </label>
        </div>
          <div>
              <input
                id="mediterranean"
                type="checkbox"
                value="mediterranean restaurant"
                name="restaurant options"
              />
              <label htmlFor="mediterranean" className="filter__options">
                Mediterránea
              </label>
          </div>
          <div>
              <input
                id="fusion"
                type="checkbox"
                value="fusion restaurant"
                name="restaurant options"
              />
              <label htmlFor="fusion" className="filter__options">
                Fusión
              </label>
          </div>
          <div>
              <input
                id="indian"
                type="checkbox"
                value="indian restaurant"
                name="restaurant options"
              />
              <label htmlFor="indian" className="filter__options">
                India
              </label>
          </div>
          <div>
              <input
                id="japanese"
                type="checkbox"
                value="japanese restaurant"
                name="restaurant options"
              />
              <label htmlFor="japanese" className="filter__options">
                Japonesa
              </label>
          </div>
          <div>
              <input
                id="oriental"
                type="checkbox"
                value="oriental restaurant"
                name="restaurant options"
              />
              <label htmlFor="oriental" className="filter__options">
                Oriental
              </label>
          </div>
          <div>
              <input
                id="american"
                type="checkbox"
                value="american restaurant"
                name="restaurant options"
              />
              <label htmlFor="american" className="filter__options">
                Americana
              </label>
          </div>
          <div>
              <input
                id="spanish"
                type="checkbox"
                value="spanish restaurant"
                name="restaurant options"
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
