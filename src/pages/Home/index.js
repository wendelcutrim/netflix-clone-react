import "./netflix.css";
import Logo from "../../assets/img/logo.png";
import Motivo1 from "../../assets/img/motivo-1.png";

import Button from "../../components/Button";
import SectionMotivos from "../../components/SectionMotivos";
import Divisor from "../../components/Divisor";
import Card from "../../components/Card";
import MOTIVOS from "../../constants/motivos";

import { Link } from "react-router-dom";

function Home() {
  const Title = <h1>Título</h1>;
  const idioma = "PT";
  // const Ola = () => alert("Oi, tudo bem?");

  return (
    <div>
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
      <section id="banner">
        {/* <h1 onMouseOver={Ola}> */}
        <h1>
          Filmes, séries e muito <br />
          mais. Sem limites.
        </h1>
        <h2>Assista onde quiser. Cancele quando quiser.</h2>
        <p>
          Pronto para assistir? Informe seu email para criar ou reiniciar sua
          assinatura.
        </p>
        {/* <Card>
          <h1> Teste do Children</h1>
          {Title}
        </Card> */}
        <div>
          <input type="email" placeholder="Email" />
          {/* <Button variante="alert" text="Vamos Lá" onClick={Ola} /> */}
          <Button variante="alert" text="Vamos Lá" />
        </div>
      </section>
      <Divisor styleClassDivisor="divisor" />

      <SectionMotivos 
        title={MOTIVOS[idioma].ONE.TITLE} 
        description={MOTIVOS[idioma].ONE.DESCRIPTION} 
        image={Motivo1} 
        imageAlt="Motivo 1"
      />
      <Divisor styleClassDivisor="divisor" />

      <SectionMotivos 
        alterna={true}
        title={MOTIVOS[idioma].ONE.TITLE} 
        description={MOTIVOS[idioma].ONE.DESCRIPTION} 
        image={Motivo1} 
        imageAlt="Motivo 1" 
      />
      <Divisor styleClassDivisor="divisor" />
      
      <SectionMotivos 
        title={MOTIVOS[idioma].ONE.TITLE} 
        description={MOTIVOS[idioma].ONE.DESCRIPTION} 
        image={Motivo1} 
        imageAlt="Motivo 1" 
      />
      <Divisor styleClassDivisor="divisor" />

    </div>
  );
}

export default Home;
