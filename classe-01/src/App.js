import { useState } from 'react';
import close from './assets/delete.svg'

function App() {
  return (
    <div className="App">
      <header className="background">
        <h1>TAREFAS</h1>
        <input placeholder="Criar nova tarefa"></input>
      </header>
      <div className="teste">
        <ul>
          <li>
            Teste
            <button>
              <img src={close} alt="Close Button" />
            </button>
          </li>
          <div className="thin-line"></div>
          <li>
            Teste
            <button>
              <img src={close} alt="Close Button" />
            </button>
          </li>
          <div className="thin-line"></div>
          <li>
            Teste
            <button>
              <img src={close} alt="Close Button" />
            </button>
          </li>
          <div className="thin-line"></div>
          <li>
            Teste
            <button>
              <img src={close} alt="Close Button" />
            </button>
          </li>
          <div className="thin-line"></div><li>
            Teste
            <button>
              <img src={close} alt="Close Button" />
            </button>
          </li>
          <div className="thin-line"></div>
          <li>
            Teste
            <button>
              <img src={close} alt="Close Button" />
            </button>
          </li>
          <div className="thin-line"></div>
        </ul>
        <nav>
          <p>5 itens restantes</p>
          <p>Todas</p>
          <p>Ativas</p>
          <p>Completada</p>
          <p>Limpar Completadas</p>
        </nav>
      </div>
    </div>
  );
}

export default App;
