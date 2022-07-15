import "./style.css";
import Button from"../Button";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <header>
          <div>
            <img src={Logo} alt="Logo" />
            <Link to="/about">Link para About com a lib </Link>
            <a href="/about">Link para About com tag a</a>
          </div>
          <div id="login">
            <select id="idioma">
              <option value="PT">Português</option>
              <option value="ING">Ingles</option>
            </select>
            <Button variante="success" text="Entrar"/>
          </div>
      </header>
    );
}

export default Header;