
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import Frase from './components/Frase';
// import List from './components/List';

function App() {
  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero = '1'/>
      <Evento numero = '2'/>
      <Form/>
    </div>
  );
}

export default App;
