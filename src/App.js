import "./netflix.css";
import Logo from "./assets/img/logo.png";
import Motivo1 from "./assets/img/motivo-1.png";

import Button from "./components/Button";
import SectionMotivos from "./components/SectionMotivos";
import Divisor from './components/Divisor';

/* function App() {
  const nome = "Wendel";
  const title = "Teste";
  const idade = 15;
  return (
    <div>
      <header>{title}{idade >= 18 ? "Maior" : "Menor"}</header>
      <main>
        <h1 className={"vermelho"}>Olá {nome}</h1>
      </main>
    </div>
  );
}
 */

function App() {
  const Title = <h1>Titulo</h1>;

  return (
    <div>
      <header>
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div id="login">
        <select id="idioma">
          <option value="PT">Português</option>
          <option value="ING">Ingles</option>
        </select>
        <Button variante="success" text="Entrar"/>
        {/* <button>Entrar</button> */}
      </div>
    </header>
    <section id="banner">
      <h1>
        Filmes, séries e muito <br />
        mais. Sem limites.
      </h1>
      <h2>Assista onde quiser. Cancele quando quiser.</h2>
      <p>
        Pronto para assistir? Informe seu email para criar ou reiniciar sua
        assinatura.
      </p>
      <div>
        <input type="email" placeholder="Email" />
        <Button variante="alert" text="Vamos Lá" />
        {/* <button>Vamos Lá</button> */}
      </div>
    </section>
    <Divisor styleClassDivisor="divisor" />
    <SectionMotivos 
      styleClass="motivos" 
      title="Aproveite na TV." 
      description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos." 
      image={Motivo1} 
      imageAlt="Motivo 1"
    />
    {/* <section className="motivos">
      <div>
        <h1>Aproveite na TV.</h1>
        <p>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>
      <div>
        <img src={Motivo1} alt="Motivo 1"/>
      </div>
    </section> */}
    <Divisor styleClassDivisor="divisor" />
    <SectionMotivos 
      styleClass="motivos alterna" 
      title="Aproveite na TV." 
      description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos." 
      image={Motivo1} 
      imageAlt="Motivo 1" 
    />
    <Divisor styleClassDivisor="divisor" />
    {/* <section className="motivos">
      <div>
        <h1>Aproveite na TV.</h1>
        <p>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>
      <div>
        <img src={Motivo1} alt="Motivo 1" />
      </div>
    </section> */}
    <SectionMotivos 
      styleClass="motivos" title="Aproveite na TV." 
      description="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos." 
      image={Motivo1} 
      imageAlt="Motivo 1" 
    />
    </div>
  );
}


export default App;
