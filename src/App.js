import "./netflix.css";
import Logo from "./assets/img/logo.png";
import Motivo1 from "./assets/img/motivo-1.png";
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
        <button>Entrar</button>
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
        <button>Vamos Lá</button>
      </div>
    </section>
    <hr className="divisor" />
    <section className="motivos">
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
    </section>
    <hr className="divisor" />
    <section className="motivos alterna">
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
    </section>
    <hr className="divisor" />
    <section className="motivos">
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
    </section>
    <hr className="divisor" />
    <section className="motivos alterna">
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
    </section>
    <hr className="divisor" />
    </div>
  );
}


export default App;
