import "./App.css";

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
        <img src="images/logo.png" alt="Logo" />
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
      <h3>Assista onde quiser. Cancele quando quiser.</h3>
      <small
        >Pronto para assistir? Informe seu email para criar ou reiniciar sua
        assinatura.
      </small>
      <div>
        <input type="email" placeholder="Email" />
        <button>Vamos Lá</button>
      </div>
    </section>
    <hr class="divisor" />
    <section class="motivos">
      <div>
        <h1>Aproveite na TV.</h1>
        <p>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>
      <div>
        <img src="/images/motivo-1.png" alt="Motivo 1" />
      </div>
    </section>
    <hr class="divisor" />
    <section class="motivos alterna">
      <div>
        <h1>Aproveite na TV.</h1>
        <p>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>
      <div>
        <img src="/images/motivo-2.png" alt="Motivo 1" />
      </div>
    </section>
    <hr class="divisor" />
    <section class="motivos">
      <div>
        <h1>Aproveite na TV.</h1>
        <p>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>
      <div>
        <img src="/images/motivo-1.png" alt="Motivo 1" />
      </div>
    </section>
    <hr class="divisor" />
    <section class="motivos alterna">
      <div>
        <h1>Aproveite na TV.</h1>
        <p>
          Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
          aparelhos de Blu-ray e outros dispositivos.
        </p>
      </div>
      <div>
        <img src="/images/motivo-1.png" alt="Motivo 1" />
      </div>
    </section>
    <hr class="divisor" />
    </div>
  );
}


export default App;
