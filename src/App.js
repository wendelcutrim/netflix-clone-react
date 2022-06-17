import "./App.css";


function App() {
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



export default App;
