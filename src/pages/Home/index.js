import "./netflix.css";
import Motivo1 from "../../assets/img/motivo-1.png";
import Button from "../../components/Button";
import SectionMotivos from "../../components/SectionMotivos";
import Divisor from "../../components/Divisor";
import Header from "../../components/Header";

import MOTIVOS from "../../constants/motivos";

function Home() {
  const Title = <h1>Título</h1>;
  const idioma = "PT";
  // const Ola = () => alert("Oi, tudo bem?");

  return (
    <div>
      <Header />
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
