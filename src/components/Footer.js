const Footer = () => {
    return (
      <footer className="footer">
        <ul className="footer__info">
          <li className="footer__info--item">Contacto</li>
          <li className="footer__info--item">Blog</li>
          <li className="footer__info--item">Acerca de</li>
        </ul>

        <div className="footer__sm">
          <h5 className="footer__sm--title">Síguenos</h5>
          <i className="footer__sm--icon fa-brands fa-twitter"></i>
          <i className="footer__sm--icon fa-brands fa-instagram"></i>
          <i className="footer__sm--icon fa-brands fa-tiktok"></i>
          <i className="footer__sm--icon fa-brands fa-facebook"></i>
        </div>

        <small className="footer__copy">
          Esta página ha sido creada con cariño por Patricia Becerra para
          Welkhome.
        </small>
      </footer>
    );
}

export default Footer;